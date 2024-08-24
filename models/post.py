#!/usr/bin/python3
"""This module defines a class post"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, Text
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

    def __init__(self, *args, **kwargs):
        """initializes post"""
        if 'title' in kwargs and not kwargs['title'].strip():
            raise ValueError("The title cannot be an empty string.")
        super().__init__(*args, **kwargs)
