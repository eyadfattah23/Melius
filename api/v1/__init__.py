from flask import Blueprint
from .users import users_bp
from .posts import posts_bp
from .articles import articles_bp
from .post_comments import comments_bp
from .post_likes import likes_bp

def create_app(app):
    # Register Blueprints
    app.register_blueprint(users_bp, url_prefix='/api/v1')
    app.register_blueprint(posts_bp, url_prefix='/api/v1')
    app.register_blueprint(articles_bp, url_prefix='/api/v1')
    app.register_blueprint(comments_bp, url_prefix='/api/v1')
    app.register_blueprint(likes_bp, url_prefix='/api/v1')