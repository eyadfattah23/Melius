from datetime import timezone
from flask import Blueprint, jsonify, request, make_response, abort
from datetime import datetime, timezone, timedelta
from models.timer_history import TimerHistory
from models import storage
from models.user import User
from flasgger.utils import swag_from

timer_bp = Blueprint('timer', __name__)


# Starts the timer for the user
@swag_from('documentation/timer/reset_or_create.yml')
@timer_bp.route('/timer/reset_or_create', methods=['POST'])
def reset_or_create_timer():
    data = request.get_json()
    user_id = data.get('user_id')

    if not user_id:
        abort(400, description="User ID is required")

    # Check if a timer already exists for the user
    timer = storage.getSession().query(TimerHistory).filter_by(user_id=user_id).first()

    message = ""
    if timer:
        if not timer.start_date.tzinfo:
            timer.start_date = timer.start_date.replace(tzinfo=timezone.utc)

        if not timer.reset_date.tzinfo:
            timer.reset_date = timer.reset_date.replace(tzinfo=timezone.utc)

        # Calculate the elapsed time in days
        elapsed_days = (datetime.now(timezone.utc).date() -
                        timer.reset_date.date()).days

        # Update max_time if the new elapsed time is greater
        if not timer.max_time:
            timer.max_time = elapsed_days
        else:
            if elapsed_days > timer.max_time:
                timer.max_time = elapsed_days

        # Reset the timer's reset dates, increment the number of tries
        timer.reset_date = datetime.now(timezone.utc)
        timer.no_tries += 1
        # Save the changes to the database
        storage.save()
        message = "Timer is reset, Don't give up you can do it\n"

    else:
        # Create a new timer entry for the user
        timer = TimerHistory(user_id=user_id)
        timer.save()
        message = "Timer created successfully!"

    return jsonify({
        "message": message,
        "data": timer.to_dict()
    })


# Returns the current timer status

@swag_from('documentation/timer/status.yml')
@timer_bp.route('/timer/status/<user_id>', methods=['GET'])
def timer_status(user_id):
    """Return the current timer status for the specified user."""

    # Get the user's timer history from the database
    timer = storage.getSession().query(TimerHistory).filter_by(user_id=user_id).first()

    if not timer or not timer.start_date:
        abort(404, description="Timer not found or not started")

    # Ensure both start_date and reset_date are timezone-aware (UTC if not provided)
    if not timer.start_date.tzinfo:
        timer.start_date = timer.start_date.replace(tzinfo=timezone.utc)

    if not timer.reset_date.tzinfo:
        timer.reset_date = timer.reset_date.replace(tzinfo=timezone.utc)

    current_time = datetime.now(timezone.utc)

    elapsed_time = current_time - timer.reset_date

    total_elapsed_seconds = elapsed_time.total_seconds()

    total_elapsed_hours = total_elapsed_seconds // 3600

    remaining_seconds = total_elapsed_seconds % 3600

    elapsed_days = elapsed_time.days
    if elapsed_days > timer.max_time:
        timer.max_time = elapsed_days

    storage.save()

    data = timer.to_dict().copy()
    data['elapsed_hours'] = int(total_elapsed_hours)
    data['elapsed_seconds'] = int(remaining_seconds)

    return jsonify({"data": data})

# Retrieves the top 10 users with the highest max_time


@timer_bp.route('/timer/top10', methods=['GET'])
@swag_from('documentation/timer/top10.yml')
def top10_timers():
    top_timers = storage.getSession().query(TimerHistory).order_by(
        TimerHistory.max_time.desc()).limit(10).all()

    result = []
    for timer in top_timers:
        result.append({
            "username": storage.get(User, timer.user_id).username,
            "max_time": str(timer.max_time)
        })

    return jsonify(result)
