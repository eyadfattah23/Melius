from flask import Blueprint, jsonify, request, make_response, abort 
from datetime import datetime
from models.timer_history import  TimerHistory
from models import storage

timer_bp = Blueprint('postLikes', __name__)


# Starts the timer for the user
@timer_bp.route('/api/timer/start', methods=['POST'])
def start_timer():
    data = request.get_json()
    user_id = data.get('user_id')

    if not user_id:
        abort(400, description="User ID is required")

    timer = storage.getSession().query(TimerHistory).filter_by(user_id=user_id).first()

    if timer:
        # Reset the start date if the timer is already running
        setattr(timer, 'start_date', datetime.now(datetime.UTC))
        setattr(timer, 'reset_date', datetime.now(datetime.UTC))
        setattr(timer, 'no_tries', timer.no_tries + 1)
        storage.save()

    else:
        # Create a new timer entry for the user
        timer = TimerHistory(user_id=user_id, start_date=datetime.now(datetime.UTC))
        timer.save()
        

    return jsonify({
        "message": "Timer started",
        "start_date": timer.start_date.isoformat() + 'Z'
    })


# Returns the current timer status
@timer_bp.route('/api/timer/status/<user_id>', methods=['GET'])
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
@timer_bp.route('/api/timer/top10', methods=['GET'])
def top10_timers():
    top_timers = storage.getSession().query(TimerHistory).order_by(TimerHistory.max_time.desc()).limit(10).all()

    result = []
    for timer in top_timers:
        result.append({
            "user_id": timer.user_id,
            "max_time": str(timer.max_time)
        })

    return jsonify(result)
