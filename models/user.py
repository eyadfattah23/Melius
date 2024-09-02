#!/usr/bin/python3
"""This module defines a class User"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, Text
from sqlalchemy.orm import relationship
from hashlib import md5
import re
from passlib.hash import bcrypt


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

    article_likes = relationship("ArticleLike", backref="user",
                                 cascade="all, delete, delete-orphan")

    article_comments = relationship("ArticleComment", backref="user",
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

        if 'email' in kwargs:
            email = kwargs.get('email')
            if self.check_email_taken(email):
                raise ValueError("Email already taken")

        if 'password' in kwargs:
            password = kwargs.get('password')
            val, error = self.password_check(password)
            if not val:
                raise ValueError(error)
            kwargs['password_hash'] = bcrypt.hash(kwargs.pop('password'))

        if 'username' in kwargs and not kwargs['username'].strip():
            raise ValueError("Username cannot be empty")

        super().__init__(*args, **kwargs)

    def check_email_taken(self, email):
        """Check if email is already taken"""
        from models import storage  # avoid circular import
        return storage.getSession().query(User).filter_by(email=email).first()

    def verify_password(self, password):
        """Verify if the provided password matches the stored password hash"""
        return bcrypt.verify(password, self.password_hash)

    def set_password(self, password):
        """Hash the password and set it after validation"""
        if self.password_check(password):
            self.password_hash = bcrypt.hash(password)
        else:
            raise ValueError("Password does not meet the required criteria.")

    @staticmethod
    def password_check(passwd):
        """checks the password format """
        SpecialSym = ['$', '@', '#', '%']
        val = True
        error = None
        if len(passwd) < 8:
            val = False
            error = 'length should be at least 8'

        if len(passwd) > 30:
            val = False
            error = 'length should be not be greater than 30'

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

    @staticmethod
    def authenticate(email, password):
        """Authenticate user with email and password"""
        from models import storage  # Import inside method bec circular import
        user = storage.getSession().query(User).filter_by(email=email).first()
        if user and user.verify_password(password):
            return user
        else:
            return None
