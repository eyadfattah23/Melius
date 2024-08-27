from models.base_model import BaseModel
from models.article import Article
from models.post import *
from models import storage
from models.user import User


def cleanup_users():
    """Utility method to remove all users from the database"""
    for user in storage.all(User).values():
        storage.delete(user)
    storage.save()


def cleanup_posts():
    """Utility method to remove all posts from the database"""
    for post in storage.all(Post).values():
        storage.delete(post)
    storage.save()


cleanup_users()
cleanup_posts()

saag = PostLike(user_id='1234565', post_id='asagag')

storage.new(saag)
storage.save()
