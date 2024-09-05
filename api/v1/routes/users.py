from flask import Blueprint, jsonify, request, make_response, abort
from models.user import User
from models.timer_history import TimerHistory
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from datetime import datetime, timezone, timedelta

users_bp = Blueprint('users', __name__)


@swag_from('documentation/user/get_users.yml')
@users_bp.route('/users', methods=['GET'])
def get_users():
    users = storage.all(User).values()
    return jsonify([user.to_dict() for user in users])

# Creates a new user


@swag_from('documentation/user/create_user.yml')
@users_bp.route('/users', methods=['POST'])
def create_user():
    """
    Creates a user
    """
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'email' not in request.get_json():
        abort(400, description="Missing email")
    if 'password' not in request.get_json():
        abort(400, description="Missing password")

    try:
        data = request.get_json()
        instance = User(**data)
        instance.save()
    except Exception as e:
        abort(400, description=str(e))
    return make_response(jsonify(instance.to_dict()), 201)

# Authenticates user


@swag_from('documentation/user/authenticate_user.yml')
@users_bp.route('/users/authenticate', methods=['POST'])
def authenticate_user():
    """ handle the login of a user"""
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'email' not in request.get_json():
        abort(400, description="Missing email")

    if 'password' not in request.get_json():
        abort(400, description="Missing password")

    data = request.get_json()

    user = User.authenticate(data['email'], data['password'])
    if not user:
        abort(401, description="Invalid credentials")
    user_dict = user.to_dict()
    # get the reset date from this timer
    user_timer = storage.getSession().query(
        TimerHistory).filter_by(user_id=user.id).first()
    if not user_timer:
        user_dict['timer_reset_date'] = None

    else:
        user_dict['timer_reset_date'] = user_timer.reset_date

    access_token = create_access_token(identity=user.id)
    return make_response(jsonify({"token": access_token, "user": user_dict}), 200)

# Retrieves specific user details


@swag_from('documentation/user/get_user.yml')
@users_bp.route('/users/<user_id>', methods=['GET'])
def get_user(user_id):
    """ Retrieves an user """
    user = storage.get(User, user_id)
    if not user:
        abort(404, description="User not found")

    return jsonify(user.to_dict())

# Updates user info


@swag_from('documentation/user/update_user.yml')
@users_bp.route('/users/<user_id>', methods=['PUT'])
def update_user(user_id):
    """
    Updates a user
    """
    user = storage.get(User, user_id)

    if not user:
        abort(404, description="User not found")

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'email', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(user, key, value)
    storage.save()
    return make_response(jsonify(user.to_dict()), 200)

# Deletes a user and all associated data


@swag_from('documentation/user/delete_user.yml')
@users_bp.route('/users/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    """
    Deletes a user Object
    """

    user = storage.get(User, user_id)

    if not user:
        abort(404, description="User not found")

    storage.delete(user)
    storage.save()

    return make_response(jsonify({"message": "User deleted"}), 200)
