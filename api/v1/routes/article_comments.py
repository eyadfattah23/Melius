from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleComment, Article
from models import storage
from flasgger.utils import swag_from

article_comments_bp = Blueprint('articleComments', __name__)


# Retrieves all comments for a specific post
@article_comments_bp.route('/article/<article_id>/comments', methods=['GET'])
def get_post_comments(article_id):
    article =  storage.get(Article, article_id)
    return jsonify([comment.to_dict() for comment in article.comments])


# Creates a new comment for a specific post
@article_comments_bp.route('/article/<article_id>/comments', methods=['POST'])
def create_post_comment(article_id):
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'text' not in request.get_json():
        abort(400, description="Missing text")

    data = request.get_json()
    instance = ArticleComment(**data)
    instance.article_id = article_id
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


# Updates a comment for a specific post
@article_comments_bp.route('/article/comments/<comment_id>', methods=['PUT'])
def update_post_comment(comment_id):
    articleComment =  storage.get(ArticleComment, comment_id)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(articleComment, key, value)
    storage.save()
    return make_response(jsonify(articleComment.to_dict()), 200)


# Deletes a comment for a specific post
@article_comments_bp.route('/article/comments/<comment_id>', methods=['DELETE'])
def delete_post_comment(comment_id):
    postComment =  storage.get(ArticleComment, comment_id)
    storage.delete(postComment)
    storage.save()
    return make_response(jsonify({"message": "Comment deleted"}), 200)