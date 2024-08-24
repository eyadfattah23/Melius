#!/usr/bin/python3
"""This module defines a class User"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, LargeBinary, Text
from sqlalchemy.orm import relationship
from hashlib import md5
import re


class User(BaseModel, Base):
    """Class representation of the users table
    in the database using sqlalchemy orm

    obligatory attributes:
    1. email
    2. password
    3. username
    """

    __tablename__ = 'users'
    email = Column(String(128), nullable=False)
    password = Column(String(128), nullable=False)
    username = Column(String(128), nullable=False)
    img = Column(LargeBinary, nullable=True)   # ->changed to text (s3 aws)

    posts = relationship("Post", backref="user",
                         cascade="all, delete, delete-orphan")

    timer_histories = relationship("TimerHistory", backref="user",
                                   cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes user"""
        # Validate email format
        email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        if not re.match(email_regex, kwargs.get('email', '')):
            raise ValueError("Invalid email format")

        if 'img' not in kwargs or not kwargs['img']:
            with open('resources/default_male_img.jpg', 'rb') as file:
                kwargs['img'] = file.read()
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        """sets a password with md5 encryption"""
        if name == "password":
            value = md5(value.encode()).hexdigest()
        super().__setattr__(name, value)

        '''
    places = relationship("Place", backref="user")
    reviews = relationship("Review", backref="user")
    '''
