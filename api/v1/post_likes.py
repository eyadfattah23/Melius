from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike
from models import storage

likes_bp = Blueprint('postLikes', __name__)


# Retrieves all likes for a specific post
@likes_bp.route('/posts/<post_id>/likes', methods=['GET'])
def get_post_likes(post_id):
  post =  storage.get(Post, post_id)
  return jsonify([like.to_dict() for like in post.likes])


# Retrieves a post likes count 
@likes_bp.route('/posts/<post_id>/likes/count', methods=['GET'])
def get_post_likes_count(post_id):
  count =  storage.count(Post, post_id)
  return jsonify({"count":  count})


# like a post clicked
@likes_bp.route('/posts/<post_id>/likes/<user_id>', methods=['POST'])
def like_post(post_id, user_id):

  
  if not request.get_json():
    abort(400, description="Not a JSON")


  like =  get_user_like_for_post(post_id, user_id)

  if not like:
    create_post_like(post_id, user_id)

  else:
    delete_post_like(post_id, user_id) 


# Retrieves a user's like for a specific post 
def get_user_like_for_post(post_id, user_id):
    post = storage.get(Post, post_id)

    if not post:
        abort(404)

    # Query for the like based on post_id and user_id
    like = storage.getSession().query(PostLike).filter_by(post_id=post_id, user_id=user_id).first()

    if not like:
        return None

    return like


# Creates a new like
def create_post_like(post_id, user_id):
  post =  storage.get(Post, post_id)

  if not post:
    abort(404)

  if not request.get_json():
    abort(400, description="Not a JSON")

  data = request.get_json()

  instance = PostLike(**data)
  instance.post_id = post.id
  instance.user_id = user_id
  instance.save()
  return make_response(jsonify(instance.to_dict()), 201)


# Deletes a like
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


