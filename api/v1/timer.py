from flask import Blueprint, jsonify, request, make_response, abort 
from datetime import datetime, timezone
from models.timer_history import  TimerHistory
from models import storage

timer_bp = Blueprint('timer', __name__)


# Starts the timer for the user
@timer_bp.route('/timer/reset_or_create', methods=['POST'])
def reset_or_create_timer():
    data = request.get_json()
    user_id = data.get('user_id')

    if not user_id:
        abort(400, description="User ID is required")

    # Check if a timer already exists for the user
    timer = storage.getSession().query(TimerHistory).filter_by(user_id=user_id).first()

    if timer:
        # Calculate the elapsed time since the start date
        elapsed_time = (datetime.now(timezone.utc) - timer.start_date).total_seconds()

        # Update max_time if the new elapsed time is greater
        if elapsed_time > timer.max_time:
            timer.max_time = elapsed_time

        # Reset the timer's start and reset dates, increment the number of tries
        timer.start_date = datetime.now(timezone.utc)
        timer.reset_date = datetime.now(timezone.utc)
        timer.no_tries += 1
    else:
        # Create a new timer entry for the user
        timer = TimerHistory(user_id=user_id)
    
    # Save the changes to the database
    storage.save()

    return jsonify({
        "message": "Timer reset or created",
        "start_date": timer.start_date.isoformat() + 'Z',
        "max_time": timer.max_time
    })


# Returns the current timer status
@timer_bp.route('/timer/status/<user_id>', methods=['GET'])
def timer_status(user_id):
    timer = storage.getSession().query(TimerHistory).filter_by(user_id=user_id).first()

    if not timer or not timer.start_date:
        abort(404, description="Timer not found or not started")

    return jsonify({
        "start_date": timer.start_date.isoformat() + 'Z',
        "no_tries": timer.no_tries,
        "max_time": str(timer.max_time)
    })

# Retrieves the top 10 users with the highest max_time
@timer_bp.route('/timer/top10', methods=['GET'])
def top10_timers():
    top_timers = storage.getSession().query(TimerHistory).order_by(TimerHistory.max_time.desc()).limit(10).all()

    result = []
    for timer in top_timers:
        result.append({
            "user_id": timer.user_id,
            "max_time": str(timer.max_time)
        })

    return jsonify(result)
