#!/usr/bin/python3
"""This module defines a class Article, it's likes and comments"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, LargeBinary, \
    Text, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship


class Article(BaseModel, Base):
    """Class representation of the Articles table
    in the database using sqlalchemy orm

    obligatory attributes:
    1. title
    2. content
    """

    __tablename__ = 'articles'
    title = Column(String(128), nullable=False)
    content = Column(Text, nullable=False)
    img = Column(Text, nullable=True)
    author = Column(String(64), nullable=True)

    likes = relationship("ArticleLike", backref="article",
                         cascade="all, delete, delete-orphan")

    comments = relationship("ArticleComment", backref="article",
                            cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes article"""
        if 'img' not in kwargs or not kwargs['img']:
            with open('resources/default_article.png', 'rb') as file:
                kwargs['img'] = file.read()

        if 'author' not in kwargs or not kwargs['author']:
            kwargs['author'] = 'anonymous'
        super().__init__(*args, **kwargs)


class ArticleLike(BaseModel, Base):
    """Class representation of the articles_likes table
    in the database using sqlalchemy orm.

    obligatory attributes:
    1. article_id
    2. user_id"""
    __tablename__ = 'articles_likes'

    __table_args__ = (
        UniqueConstraint('user_id', 'article_id',
                         name='unique_user_article_like'),
    )

    article_id = Column(String(60), ForeignKey('articles.id'), nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """Initializes an ArticleLike"""
        super().__init__(*args, **kwargs)


class ArticleComment(BaseModel, Base):
    """Class representation of the articles_comments table
    in the database using SQLAlchemy ORM.

    obligatory attributes:
    1. article_id
    2. user_id
    3. text"""

    __tablename__ = 'articles_comments'

    article_id = Column(String(60), ForeignKey('articles.id'), nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    text = Column(Text, nullable=False)

    def __init__(self, *args, **kwargs):
        """Initializes a articleComment"""
        if 'text' in kwargs and not kwargs['text'].strip():
            raise ValueError("The comment cannot be an empty string.")
        super().__init__(*args, **kwargs)
