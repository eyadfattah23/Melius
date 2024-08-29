from flask import Blueprint, jsonify
from models.article import Article

articles_bp = Blueprint('articles', __name__)

@articles_bp.route('/articles', methods=['GET'])
def get_articles():
    articles = Article.query.all()
    return jsonify([article.to_dict() for article in articles])
