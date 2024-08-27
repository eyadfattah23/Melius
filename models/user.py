#!/usr/bin/python3
"""This module defines a class User"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, LargeBinary, Text
from sqlalchemy.orm import relationship
from hashlib import md5
import re
from passlib.hash import bcrypt


def password_check(passwd):

    SpecialSym = ['$', '@', '#', '%']
    val = True
    error = None
    if len(passwd) < 8:
        val = False
        error = 'length should be at least 8'

    if len(passwd) > 16:
        val = False
        error = 'length should be not be greater than 16'

    if not any(char.isdigit() for char in passwd):
        val = False
        error = 'Password should have at least one numeral'
    if not any(char.isupper() for char in passwd):
        val = False
        error = 'Password should have at least one uppercase letter'

    if not any(char.islower() for char in passwd):
        val = False
        error = 'Password should have at least one lowercase letter'

    if not any(char in SpecialSym for char in passwd):
        val = False
        error = 'Password should have at least one of the symbols $%@#'

    return [val, error]


class User(BaseModel, Base):
    """Class representation of the users table
    in the database using sqlalchemy orm

    obligatory attributes:
    1. email
    2. password
    3. username
    """

    __tablename__ = 'users'
    email = Column(String(128), nullable=False, unique=True)
    password_hash = Column(String(128), nullable=False)
    username = Column(String(128), nullable=False)
    img = Column(Text, nullable=True)   # ->changed to text (s3 aws)

    posts = relationship("Post", backref="user",
                         cascade="all, delete, delete-orphan")

    timer_histories = relationship("TimerHistory", backref="user",
                                   cascade="all, delete, delete-orphan")

    post_likes = relationship("PostLike", backref="user",
                              cascade="all, delete, delete-orphan")

    post_comments = relationship("PostComment", backref="user",
                                 cascade="all, delete, delete-orphan")

    def __init__(self, *args, **kwargs):
        """initializes user"""
        # Validate email format
        email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        if not re.match(email_regex, kwargs.get('email', '')):
            raise ValueError("Invalid email format")

        if 'img' not in kwargs or not kwargs['img']:
            with open('resources/default_male_img.jpg', 'rb') as file:
                kwargs['img'] = 'resources/default_male_img.jpg'

        if 'password' in kwargs:
            password = kwargs.get('password')
            val, error = password_check(password)
            if not val:
                raise ValueError(error)
            kwargs['password_hash'] = bcrypt.hash(kwargs.pop('password'))

        if 'username' in kwargs and not kwargs['username'].strip():
            raise ValueError("Username cannot be empty")

        super().__init__(*args, **kwargs)

    def verify_password(self, password):
        """Verify if the provided password matches the stored password hash"""
        return bcrypt.verify(password, self.password_hash)

    def set_password(self, password):
        """Hash the password and set it after validation"""
        if password_check(password):
            self.password_hash = bcrypt.hash(password)
        else:
            raise ValueError("Password does not meet the required criteria.")
