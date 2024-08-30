from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike
from models import storage

comments_bp = Blueprint('postLikes', __name__)


# Retrieves all likes for a specific post
@comments_bp.route('/posts/<post_id>/likes', methods=['GET'])
def get_post_likes(post_id):
  post =  storage.get(Post, post_id)
  return jsonify([like.to_dict() for like in post.likes])


