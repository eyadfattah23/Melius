from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post
from models import storage

posts_bp = Blueprint('posts', __name__)

@posts_bp.route('/posts', methods=['GET'])
def get_posts():
    posts = storage.all(Post).values()
    return jsonify([post.to_dict() for post in posts])

# Creates a new post
@posts_bp.route('/posts', methods=['POST'])
def create_post():
    """
    Creates a post
    """
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'title' not in request.get_json():
        abort(400, description="Missing title")
    if 'text' not in request.get_json():
        abort(400, description="Missing content")
    if 'user_id' not in request.get_json():
        abort(400, description="Missing user_id")

    data = request.get_json()
    instance = Post(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)

# Retrieves specific post info
@posts_bp.route('/posts/<post_id>', methods=['GET'])
def get_post(post_id):
    """ Retrieves an user """
    post = storage.get(Post, post_id)
    if not post:
        abort(404)

    return jsonify(post.to_dict())

# Updates post content
@posts_bp.route('/posts/<post_id>', methods=['PUT'])
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    """
    Updates a user
    """
    post = storage.get(Post, post_id)

    if not post:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(post, key, value)
    storage.save()
    return make_response(jsonify(post.to_dict()), 200)

# Deletes a post and all associated data
@posts_bp.route('/posts/<post_id>', methods=['DELETE'])
def delete_post(post_id):    
    ''' Deletes a post and all associated data '''
    post = storage.get(Post, post_id)

    if not post:
        abort(404)

    storage.delete(post)
    storage.save()

    return jsonify({"message": "Post deleted"}), 204


# Retrieves all comments for a specific post
@posts_bp.route('/posts/<post_id>/comments', methods=['GET'])
def get_post_comments(post_id):
    post =  storage.get(Post, post_id)
    return jsonify([comment.to_dict() for comment in post.comments])