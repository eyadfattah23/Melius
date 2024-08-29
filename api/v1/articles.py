from flask import Blueprint, jsonify
from models.article import Article
from models import storage

articles_bp = Blueprint('articles', __name__)

@articles_bp.route('/articles', methods=['GET'])
def get_articles():
    articles = storage.all(Article).values()
    return jsonify([article.to_dict() for article in articles])
