#!/usr/bin/python3
"""This module defines a class post, it's likes and comments"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, Text, UniqueConstraint
from sqlalchemy.orm import relationship


class Post(BaseModel, Base):
    """Class representation of the posts table
    in the database using sqlalchemy orm

    obligatory attributes:
    1. title
    2. user_id
    """

    __tablename__ = 'posts'
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    title = Column(String(128), nullable=False)
    text = Column(Text, nullable=True)

    likes = relationship("PostLike", backref="post",
                         cascade="all, delete, delete-orphan")

    comments = relationship("PostComment", backref="post",
                            cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes post"""
        if 'title' in kwargs and not kwargs['title'].strip():
            raise ValueError("The title cannot be an empty string.")
        super().__init__(*args, **kwargs)


class PostLike(BaseModel, Base):
    """Class representation of the posts_likes table
    in the database using sqlalchemy orm.

    obligatory attributes:
    1. post_id
    2. user_id"""

    __tablename__ = 'posts_likes'

    __mapper_args__ = {
        'confirm_deleted_rows': False
    }

    __table_args__ = (
        UniqueConstraint('user_id', 'post_id', name='unique_user_post_like'),
    )

    post_id = Column(String(60), ForeignKey('posts.id'), nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """Initializes a PostLike"""
        super().__init__(*args, **kwargs)


class PostComment(BaseModel, Base):
    """Class representation of the posts_comments table
    in the database using SQLAlchemy ORM.

    obligatory attributes:
    1. post_id
    2. user_id
    3. text"""

    __tablename__ = 'posts_comments'

    __mapper_args__ = {
        'confirm_deleted_rows': False
    }

    post_id = Column(String(60), ForeignKey('posts.id'), nullable=False)
    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    text = Column(Text, nullable=False)

    def __init__(self, *args, **kwargs):
        """Initializes a PostComment"""
        if 'text' in kwargs and not kwargs['text'].strip():
            raise ValueError("The comment cannot be an empty string.")
        super().__init__(*args, **kwargs)
