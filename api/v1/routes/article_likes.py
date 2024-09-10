from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleLike, Article
from models import storage
from flasgger.utils import swag_from
from flask_jwt_extended import jwt_required, get_jwt_identity


article_likes_bp = Blueprint('articleLikes', __name__)



@article_likes_bp.route('/article/<article_id>/likes', methods=['GET'])
@jwt_required()
@swag_from('documentation/article/likes/get_article_likes.yml')
def get_article_likes(article_id):
    """Retrieves all likes for a specific article"""
    article = storage.get(Article, article_id)
    return jsonify([like.to_dict() for like in article.likes])


# Retrieves a article likes count

@article_likes_bp.route('/article/<article_id>/likes/count', methods=['GET'])
@jwt_required()
@swag_from('documentation/article/likes/get_article_likes_count.yml')
def get_article_likes_count(article_id):
    "Retrieves a article likes count"
    count = storage.count(ArticleLike, article_id=article_id)
    return jsonify({"count":  count})


# Handles liking or unliking a article by a specific user

@article_likes_bp.route('/article/<article_id>/likes', methods=['POST'])
@jwt_required()
@swag_from('documentation/article/likes/like_article.yml')
def like_article(article_id):
    """Handles liking or unliking an article by a specific user"""
    # Check if the request has JSON data
    if not request.get_json():
        abort(400, description="Not a JSON")

    # Get the user_id from the request JSON data
    data = request.get_json()
    user_id = data.get('user_id')

    # If user_id is not provided, return an error
    if not user_id:
        abort(400, description="Missing user_id in request")

    current_user_id = get_jwt_identity()

    if data['user_id'] != current_user_id:
        abort(403, "Permission denied, not the current logged in user")

    # Retrieve the like by the user for the specified article
    like = get_user_like_for_article(article_id, user_id)

    if not like:
        # Create a new like if it doesn't exist
        create_article_like(article_id, user_id)
        return make_response(jsonify({"message": "article liked"}), 201)
    else:
        # Delete the like if it already exists
        delete_article_like(like)
        return make_response(jsonify({"message": "Like removed"}), 200)


# Retrieves a user's like for a specific article
def get_user_like_for_article(article_id, user_id):
    """retrieve a user's like for a specific article"""
    article = storage.get(Article, article_id)

    if not article:
        abort(404, description="Article not found")

    # Query for the like based on article_id and user_id
    like = storage.getSession().query(ArticleLike).filter_by(
        article_id=article_id, user_id=user_id).first()

    return like


# Creates a new like
def create_article_like(article_id, user_id):
    """create a new like for a specific article by a specific user"""
    article = storage.get(Article, article_id)

    if not article:
        abort(404, description="Article not found")

    # Create a new articleLike instance
    new_like = ArticleLike(article_id=article.id, user_id=user_id)
    new_like.save()
    return new_like


# Deletes a like
def delete_article_like(like):
    """deletes a like"""
    storage.delete(like)
    storage.save()
