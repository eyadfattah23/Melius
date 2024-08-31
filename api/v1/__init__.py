from flask import Blueprint
from .routes.users import users_bp
from .routes.posts import posts_bp
from .routes.articles import articles_bp
from .routes.article_comments import article_comments_bp
from .routes.article_likes import article_likes_bp
from .routes.post_comments import comments_bp
from .routes.post_likes import likes_bp
from .routes.timer import timer_bp

def create_app(app):
    # Register Blueprints
    app.register_blueprint(users_bp, url_prefix='/api/v1')
    app.register_blueprint(posts_bp, url_prefix='/api/v1')
    app.register_blueprint(articles_bp, url_prefix='/api/v1')
    app.register_blueprint(article_comments_bp, url_prefix='/api/v1')
    app.register_blueprint(article_likes_bp, url_prefix='/api/v1')
    app.register_blueprint(comments_bp, url_prefix='/api/v1')
    app.register_blueprint(likes_bp, url_prefix='/api/v1')
    app.register_blueprint(timer_bp, url_prefix='/api/v1')