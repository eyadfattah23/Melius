from flask import Blueprint, jsonify, abort, request, make_response
from models.article import Article
from models.article import ArticleLike
from models import storage
from flasgger.utils import swag_from

articles_bp = Blueprint('articles', __name__)


@swag_from('documentation/article/get_articles.yml')
@articles_bp.route('/articles', methods=['GET'])
def get_articles():
    # Get the page number and page size from query parameters, with defaults
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)

    # Get all articles
    articles = list(storage.all(Article).values())

    # Calculate total number of articles
    total_articles = len(articles)

    # Paginate the articles
    start = (page - 1) * per_page
    end = start + per_page
    paginated_articles = articles[start:end]

    # Prepare the paginated response
    articles_list = []
    for article in paginated_articles:
        article_dict = article.to_dict().copy()
        likes_count = storage.count(ArticleLike, article_id=article.id)
        del article_dict['content']
        article_dict['likes_count'] = likes_count
        articles_list.append(article_dict)

    # Create the response with pagination metadata
    response = {
        'total_articles': total_articles,
        'page': page,
        'per_page': per_page,
        'total_pages': (total_articles + per_page - 1) // per_page,
        'articles': articles_list
    }

    return jsonify(response)


@swag_from('documentation/article/get_article.yml')
@articles_bp.route('/articles/<article_id>', methods=['GET'])
def get_article(article_id):
    article = storage.get(Article, article_id)
    if article is None:
        abort(404, description="Article not found")
    return jsonify(article.to_dict())


@swag_from('documentation/article/create_article.yml')
@articles_bp.route('/articles', methods=['POST'])
def create_article():
    if not request.get_json():
        abort(400, description="Not a JSON")

    if 'title' not in request.get_json():
        abort(400, description="Missing title")

    if 'content' not in request.get_json():
        abort(400, description="Missing content")

    data = request.get_json()
    instance = Article(**data)
    instance.save()
    return make_response(jsonify(instance.to_dict()), 201)


@swag_from('documentation/article/update_article.yml')
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


@swag_from('documentation/article/delete_article.yml')
@articles_bp.route('/articles/<article_id>', methods=['DELETE'])
def delete_article(article_id):
    article = storage.get(Article, article_id)
    if article is None:
        abort(404, description="Article not found")
    storage.delete(article)
    storage.save()
    return make_response(jsonify({'message': 'article deleted'}), 200)
