from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostLike
from models import storage
from flasgger.utils import swag_from

likes_bp = Blueprint('postLikes', __name__)


# Retrieves all likes for a specific post
@likes_bp.route('/posts/<post_id>/likes', methods=['GET'])
def get_post_likes(post_id):
    post =  storage.get(Post, post_id)
    return jsonify([like.to_dict() for like in post.likes])


# Retrieves a post likes count 
@likes_bp.route('/posts/<post_id>/likes/count', methods=['GET'])
def get_post_likes_count(post_id):
    count =  storage.count(PostLike, post_id=post_id)
    return jsonify({"count":  count})


# Handles liking or unliking a post by a specific user
@likes_bp.route('/posts/<post_id>/likes', methods=['POST'])
def like_post(post_id):
    # Check if the request has JSON data
    if not request.get_json():
        abort(400, description="Not a JSON")

    # Get the user_id from the request JSON data
    data = request.get_json()
    user_id = data.get('user_id')

    # If user_id is not provided, return an error
    if not user_id:
        abort(400, description="Missing user_id in request")

    # Retrieve the like by the user for the specified post
    like = get_user_like_for_post(post_id, user_id)

    if not like:
        # Create a new like if it doesn't exist
        create_post_like(post_id, user_id)
        return make_response(jsonify({"message": "Post liked"}), 201)
    else:
        # Delete the like if it already exists
        delete_post_like(like)
        return make_response(jsonify({"message": "Like removed"}), 200)



# Retrieves a user's like for a specific post 
def get_user_like_for_post(post_id, user_id):
    post = storage.get(Post, post_id)

    if not post:
        abort(404)

    # Query for the like based on post_id and user_id
    like = storage.getSession().query(PostLike).filter_by(post_id=post_id, user_id=user_id).first()

    return like


# Creates a new like
def create_post_like(post_id, user_id):
    post = storage.get(Post, post_id)

    if not post:
        abort(404)

    # Create a new PostLike instance
    new_like = PostLike(post_id=post.id, user_id=user_id)
    new_like.save()
    return new_like


# Deletes a like
def delete_post_like(like):
    storage.delete(like)
    storage.save()


