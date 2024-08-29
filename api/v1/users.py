from flask import Blueprint, jsonify
from models.user import User
from models import storage

users_bp = Blueprint('users', __name__)

@users_bp.route('/users', methods=['GET'])
def get_users():
    users = storage.all(User).values()
    return jsonify([user.to_dict() for user in users])