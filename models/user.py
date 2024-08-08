#!/usr/bin/python3
"""This module defines a class User"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship
from hashlib import md5


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
    img = Column(Text, nullable=True)

    def __init__(self, *args, **kwargs):
        """initializes user"""
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
