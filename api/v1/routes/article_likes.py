from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleLike, Article
from models import storage
from flasgger.utils import swag_from


article_likes_bp = Blueprint('articleLikes', __name__)

# Retrieves all likes for a specific article
@swag_from('documentation/article/likes/get_article_likes.yml')
@article_likes_bp.route('/article/<article_id>/likes', methods=['GET'])
def get_article_likes(article_id):
    article =  storage.get(Article, article_id)
    return jsonify([like.to_dict() for like in article.likes])


# Retrieves a article likes count 
@swag_from('documentation/article/likes/get_article_likes_count.yml')
@article_likes_bp.route('/article/<article_id>/likes/count', methods=['GET'])
def get_article_likes_count(article_id):
    count =  storage.count(ArticleLike, article_id=article_id)
    return jsonify({"count":  count})


# Handles liking or unliking a article by a specific user
@swag_from('documentation/article/likes/like_article.yml')
@article_likes_bp.route('/article/<article_id>/likes', methods=['POST'])
def like_article(article_id):
    # Check if the request has JSON data
    if not request.get_json():
        abort(400, description="Not a JSON")

    # Get the user_id from the request JSON data
    data = request.get_json()
    user_id = data.get('user_id')

    # If user_id is not provided, return an error
    if not user_id:
        abort(400, description="Missing user_id in request")

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
    article = storage.get(Article, article_id)

    if not article:
        abort(404)

    # Query for the like based on article_id and user_id
    like = storage.getSession().query(ArticleLike).filter_by(article_id=article_id, user_id=user_id).first()

    return like


# Creates a new like
def create_article_like(article_id, user_id):
    article = storage.get(Article, article_id)

    if not article:
        abort(404)

    # Create a new articleLike instance
    new_like = ArticleLike(article_id=article.id, user_id=user_id)
    new_like.save()
    return new_like


# Deletes a like
def delete_article_like(like):
    storage.delete(like)
    storage.save()


