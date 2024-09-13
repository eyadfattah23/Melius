from flask import Blueprint, jsonify, request, make_response, abort
from models.post import Post, PostComment
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required, get_jwt_identity

comments_bp = Blueprint('postComments', __name__)


# Retrieves all comments for a specific post

@comments_bp.route('/posts/<post_id>/comments', methods=['GET'])
@jwt_required()
@swag_from('documentation/post/comments/get_post_comments.yml')
def get_post_comments(post_id):
    """retrieves a list of all comments for a specific post """
    post = storage.get(Post, post_id)

    comments_list = []
    for comment in post.comments:
        comment_dict = comment.to_dict().copy()
        comment_dict['username'] = comment.user.username
        timer_history = comment.user.timer_histories[0] if comment.user.timer_histories else None
        comment_dict['max_time'] = timer_history.max_time if timer_history else 0

        comments_list.append(comment_dict)

    return jsonify(comments_list)


# Creates a new comment for a specific post

@comments_bp.route('/posts/<post_id>/comments', methods=['POST'])
@jwt_required()
@swag_from('documentation/post/comments/create_post_comment.yml')
def create_post_comment(post_id):
    """creates a new comment for a specific post """
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'text' not in request.get_json():
        abort(400, description="Missing text")

    if 'user_id' not in request.get_json():
        abort(400, description="Missing user_id")

    current_user_id = get_jwt_identity()

    if request.get_json()['user_id'] != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    data = request.get_json()
    instance = PostComment(**data)
    instance.post_id = post_id
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


# Updates a comment for a specific post

@comments_bp.route('/posts/<post_id>/comments/<comment_id>', methods=['PUT'])
@jwt_required()
@swag_from('documentation/post/comments/update_post_comment.yml')
def update_post_comment(post_id, comment_id):
    """update a comment for a specific post"""
    postComment = storage.get(PostComment, comment_id)

    if not request.get_json():
        abort(400, description="Not a JSON")

    current_user_id = get_jwt_identity()

    if postComment.user_id != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(postComment, key, value)
    storage.save()
    return make_response(jsonify(postComment.to_dict()), 200)


# Deletes a comment for a specific post

@comments_bp.route('/posts/<post_id>/comments/<comment_id>', methods=['DELETE'])
@jwt_required()
@swag_from('documentation/post/comments/delete_post_comment.yml')
def delete_post_comment(post_id, comment_id):
    """deletes a comment for a specific post"""
    current_user_id = get_jwt_identity()

    postComment = storage.get(PostComment, comment_id)
    if postComment.user_id != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    storage.delete(postComment)
    storage.save()
    return make_response(jsonify({"message": "Comment deleted"}), 200)
