from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike
from models import storage

likes_bp = Blueprint('postLikes', __name__)


# Retrieves all likes for a specific post
@likes_bp.route('/posts/<post_id>/likes', methods=['GET'])
def get_post_likes(post_id):
  post =  storage.get(Post, post_id)
  return jsonify([like.to_dict() for like in post.likes])


# Creates a new like
@likes_bp.route('/posts/<post_id>/likes', methods=['POST'])
def create_post_like(post_id):
  post =  storage.get(Post, post_id)

  if not post:
    abort(404)

  if not request.get_json():
    abort(400, description="Not a JSON")

  data = request.get_json()

  instance = PostLike(**data)
  instance.post = post
  instance.save()
  return make_response(jsonify(instance.to_dict()), 201)


# Deletes a like
@likes_bp.route('/posts/<post_id>/likes/<like_id>', methods=['DELETE'])
def delete_post_like(post_id, like_id):
  post =  storage.get(Post, post_id)

  if not post:
    abort(404)

  like =  storage.get(PostLike, like_id)

  if not like:
    abort(404)

  storage.delete(like)
  storage.save()
  return make_response(jsonify({"message": "Like deleted"}), 200)


