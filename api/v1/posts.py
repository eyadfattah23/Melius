from flask import Blueprint, jsonify
from models.post import Post
from models import storage

posts_bp = Blueprint('posts', __name__)

@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    posts = storage.all(Post).values()
    return jsonify([post.to_dict() for post in posts])