from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleComment, Article
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required, get_jwt_identity

article_comments_bp = Blueprint('articleComments', __name__)


# Retrieves all comments for a specific post
@swag_from('documentation/article/comments/get_article_comments.yml')
@article_comments_bp.route('/article/<article_id>/comments', methods=['GET'])
@jwt_required()
def get_article_comments(article_id):
    """Retrieves a list all comments for a specific article"""
    article = storage.get(Article, article_id)
    return jsonify([comment.to_dict() for comment in article.comments])


# Creates a new comment for a specific post
@swag_from('documentation/article/comments/create_article_comment.yml')
@article_comments_bp.route('/article/<article_id>/comments', methods=['POST'])
@jwt_required()
def create_article_comment(article_id):
    """creates a new comment for a specific article"""
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'text' not in request.get_json():
        abort(400, description="Missing text")

    if 'user_id' not in request.get_json():
        abort(400, description="Missing user_id")

    current_user_id = get_jwt_identity()

    if request.get_json()['user_id'] != current_user_id:
        abort(403, "Permission denied, not the current logged in user")  # try both

    data = request.get_json()
    instance = ArticleComment(**data)
    instance.article_id = article_id

    if instance.user_id != current_user_id:
        abort(403, "Permission denied, not the current logged in user")  # try both

    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


# Updates a comment for a specific post
@swag_from('documentation/article/comments/update_article_comment.yml')
@article_comments_bp.route('/article/comments/<comment_id>', methods=['PUT'])
@jwt_required()
def update_article_comment(comment_id):
    """update a comment"""
    articleComment = storage.get(ArticleComment, comment_id)

    current_user_id = get_jwt_identity()

    if not articleComment:
        abort(404, description="Comment not found")

    if not request.get_json():
        abort(400, description="Not a JSON")

    if articleComment.user_id != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(articleComment, key, value)
    storage.save()
    return make_response(jsonify(articleComment.to_dict()), 200)


# Deletes a comment for a specific post
@swag_from('documentation/article/comments/delete_article_comment.yml')
@article_comments_bp.route('/article/comments/<comment_id>', methods=['DELETE'])
@jwt_required()
def delete_article_comment(comment_id):
    """delete a comment"""
    articleComment = storage.get(ArticleComment, comment_id)

    current_user_id = get_jwt_identity()

    articleComment = storage.get(ArticleComment, comment_id)
    if articleComment.user_id != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    storage.delete(articleComment)
    storage.save()
    return make_response(jsonify({"message": "Comment deleted"}), 200)
