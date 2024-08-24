#!/usr/bin/python3
"""This module defines a class Article"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, LargeBinary, Text, ForeignKey
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
    img = Column(LargeBinary, nullable=True)
    author = Column(String(64), nullable=True)

    def __init__(self, *args, **kwargs):
        """initializes article"""
        if 'img' not in kwargs or not kwargs['img']:
            with open('resources/default_article.png', 'rb') as file:
                kwargs['img'] = file.read()

        if 'author' not in kwargs or not kwargs['author']:
            kwargs['author'] = 'anonymous'
        super().__init__(*args, **kwargs)
