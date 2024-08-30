from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleLike
from models import storage


article_likes_bp = Blueprint('articleLikes', __name__)