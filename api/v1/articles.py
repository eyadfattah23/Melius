from flask import Blueprint, jsonify, abort, request, make_response
from models.article import Article
from models import storage

articles_bp = Blueprint('articles', __name__)

@articles_bp.route('/articles', methods=['GET'])
def get_articles():
    articles = storage.all(Article).values()
    return jsonify([article.to_dict() for article in articles])


@articles_bp.route('/articles/<article_id>', methods=['GET'])   
def get_article(article_id):
    article = storage.get(Article, article_id)
    if article is None:
        abort(404, description="Article not found")
    return jsonify(article.to_dict())


@articles_bp.route('/articles', methods=['POST'])
def create_article():
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'title' not in request.get_json():
        abort(400, description="Missing title")

    if 'text' not in request.get_json():
        abort(400, description="Missing text")

    data = request.get_json()
    instance = Article(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@articles_bp.route('/articles/<article_id>', methods=['PUT'])
def update_article(article_id):
    article = storage.get(Article, article_id)

    if not article:
        abort(404, description="Article not found")

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'user_id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(article, key, value)
    storage.save()
    return make_response(jsonify(article.to_dict()), 200)


@articles_bp.route('/articles/<article_id>', methods=['DELETE'])
def delete_article(article_id):
    article = storage.get(Article, article_id)
    if article is None:
        abort(404, description="Article not found")
    storage.delete(article)
    storage.save()
    return make_response(jsonify({}), 200)
