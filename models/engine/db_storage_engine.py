#!/usr/bin/python3
"""This module defines a class to manage DB storage for Melius"""
from sqlalchemy import create_engine, func,desc
from sqlalchemy.orm import sessionmaker, scoped_session, aliased
from sqlalchemy.exc import IntegrityError

from os import getenv
from models.base_model import BaseModel, Base
from models.user import User
from models.article import *
from models.post import *
from models.timer_history import TimerHistory
import models

classes = {"User": User, 'Article': Article,
           'Post': Post, 'TimerHistory': TimerHistory,
           'PostLike': PostLike, 'PostComment': PostComment,
           'ArticleLike': ArticleLike, 'ArticleComment': ArticleComment}
# {"Amenity": Amenity, "City": City,
#           "Place": Place, "Review": Review, "State": State}


class DBStorage:
    '''defines a class to manage DB storage for Melius'''
    __engine = None
    __session = None

    def __init__(self):
        '''initializes a new instance of DBStorage
            create the engine (self.__engine)
            linked to the MySQL database and user created before'''

        MySQL_user = getenv('MELIUS_MYSQL_USER')
        MySQL_password = getenv('MELIUS_MYSQL_PWD')
        MySQL_host = getenv('MELIUS_MYSQL_HOST')
        MySQL_database = getenv('MELIUS_MYSQL_DB')
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'
                                      .format(
                                          MySQL_user,
                                          MySQL_password,
                                          MySQL_host,
                                          MySQL_database), pool_pre_ping=True)
        
    
    def getSession(self):
        return self.__session

    def all(self, cls=None, page=None, page_size=None, filter_type=None, user_id=None):
        """
        Query on the current database session (self.__session) all objects
        depending on the class name (argument cls), with optional pagination, filtering, and ordering.
        """
    
        objects = {}
    
        # If no specific class is provided, query all classes
        if cls is None:
            from models.user import User
            from models.article import Article
            from models.article import ArticleLike
            from models.article import ArticleComment
            from models.post import Post
            from models.post import PostLike
            from models.post import PostComment
            from models.timer_history import TimerHistory
    
            classes = {'user': User, 'article': Article,
                       'timer_history': TimerHistory, 'post': Post,
                       'postlike': PostLike, 'postcomment': PostComment,
                       'articlelike': ArticleLike, 'articlecomment': ArticleComment}
    
            for c in classes.values():
                query = self.__session.query(c)
    
                # Apply filters based on the filter type
                if filter_type == 'most_liked' and c == Article: 
                    query(Article).outerjoin(ArticleLike, Article.id == ArticleLike.article_id)  # Group by article ID

                elif filter_type == 'newest' and hasattr(c, 'created_at'):
                    query = query.order_by(c.created_at.desc())
                elif filter_type == 'oldest' and hasattr(c, 'created_at'):
                    query = query.order_by(c.created_at.asc())
                elif filter_type == 'by_user' and hasattr(c, 'user_id') and user_id is not None:
                    query = query.filter(c.user_id == user_id)
    
                # Apply pagination if page and page_size are provided
                if page is not None and page_size is not None:
                    query = query.offset((page - 1) * page_size).limit(page_size)
    
                records = query.all()
                for obj in records:
                    objects.update(
                        {obj.__class__.__name__ + '.' + str(obj.id): obj})
    
        else:
            query = self.__session.query(cls)
    
            # Apply filters based on the filter type
            if filter_type == 'most_liked' and hasattr(cls, 'likes'):
                query = query.order_by(cls.likes.desc())
            elif filter_type == 'newest' and hasattr(cls, 'created_at'):
                query = query.order_by(cls.created_at.desc())
            elif filter_type == 'oldest' and hasattr(cls, 'created_at'):
                query = query.order_by(cls.created_at.asc())
            elif filter_type == 'by_user' and hasattr(cls, 'user_id') and user_id is not None:
                query = query.filter(cls.user_id == user_id)
    
            # Apply pagination if page and page_size are provided
            if page is not None and page_size is not None:
                query = query.offset((page - 1) * page_size).limit(page_size)
    
            records = query.all()
            for obj in records:
                objects.update(
                    {obj.__class__.__name__ + '.' + str(obj.id): obj})
    
        return objects



    def new(self, obj):
        '''add the object to the current database session'''
        self.__session.add(obj)

    def save(self):
        '''commit all changes of the current database session'''
        try:
            self.__session.commit()
        except IntegrityError:  # test for Dataerror
            self.__session.rollback()
            raise  # Re-raise the exception so it can be caught in your application code

    def rollback(self):
        '''Rollback the current database session'''
        self.__session.rollback()

    def delete(self, obj=None):
        '''delete from the current database session obj if not None'''
        if obj:
            self.__session.delete(obj)

    def reload(self):
        '''create all tables in the database
        create the current database session
        from the engine by using a sessionmaker
        '''
        from models.user import User
        from models.article import Article
        from models.article import ArticleLike
        from models.article import ArticleComment
        from models.post import Post
        from models.post import PostComment
        from models.post import PostLike
        from models.timer_history import TimerHistory
        # from models.city import City
        # from models.amenity import Amenity
        from models.base_model import Base
        Base.metadata.create_all(self.__engine)

        session_factory = sessionmaker(
            bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session()

    def close(self):
        """call close() method on the private session attribute"""
        self.__session.close()

    def get(self, cls, id):
        """
        Returns the object based on the class name and its ID, or
        None if not found
        """
        if cls not in classes.values():
            return None
        
        record = self.__session.get(cls, id)

        return record

        '''all_cls = models.storage.all(cls)
        for value in all_cls.values():
            if (value.id == id):
                return value

        return None'''

    def count(self, cls=None, **filters):
        """
        Count the number of objects in storage using SQLAlchemy, with optional filters.
    
        :param cls: The class to count objects of. If None, counts objects of all classes.
        :param filters: Optional filters to apply to the count query.
        :return: The count of objects matching the criteria.
        """
        session = self.__session
    
        if cls:
            # Count objects of a specific class with optional filters
            query = session.query(func.count(cls.id))
            
            # Apply filters if any
            for attr, value in filters.items():
                query = query.filter(getattr(cls, attr) == value)
    
            return query.scalar()
        else:
            # Count objects of all classes with optional filters
            total_count = 0
            for clas in classes.values():
                query = session.query(func.count(clas.id))
                total_count += query.scalar()
            return total_count
    