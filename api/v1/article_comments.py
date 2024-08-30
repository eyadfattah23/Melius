from flask import Blueprint, jsonify, abort, request, make_response
from models.article import ArticleComment
from models import storage


article_comments_bp = Blueprint('articleComments', __name__)