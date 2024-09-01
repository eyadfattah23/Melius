from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostComment
from models import storage
from flasgger.utils import swag_from

comments_bp = Blueprint('postComments', __name__)


# Retrieves all comments for a specific post
@swag_from('documentation/post/comments/get_post_comments.yml')
@comments_bp.route('/posts/<post_id>/comments', methods=['GET'])
def get_post_comments(post_id):
    post =  storage.get(Post, post_id)
    return jsonify([comment.to_dict() for comment in post.comments])


# Creates a new comment for a specific post
@swag_from('documentation/post/comments/create_post_comment.yml')
@comments_bp.route('/posts/<post_id>/comments', methods=['POST'])
def create_post_comment(post_id):
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'text' not in request.get_json():
        abort(400, description="Missing text")

    data = request.get_json()
    instance = PostComment(**data)
    instance.post_id = post_id
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


# Updates a comment for a specific post
@swag_from('documentation/post/comments/update_post_comment.yml')
@comments_bp.route('/posts/<post_id>/comments/<comment_id>', methods=['PUT'])
def update_post_comment(post_id, comment_id):
    postComment =  storage.get(PostComment, comment_id)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(postComment, key, value)
    storage.save()
    return make_response(jsonify(postComment.to_dict()), 200)


# Deletes a comment for a specific post
@swag_from('documentation/post/comments/delete_post_comment.yml')
@comments_bp.route('/posts/<post_id>/comments/<comment_id>', methods=['DELETE'])
def delete_post_comment(post_id, comment_id):
    postComment =  storage.get(PostComment, comment_id)
    storage.delete(postComment)
    storage.save()
    return make_response(jsonify({"message": "Comment deleted"}), 200)