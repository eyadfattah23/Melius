#!/usr/bin/python3

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
eyad = User(email='eyad@example.com',
            password='eyadpassword', username='eyad')

lamia = User(email='lamia@example.com',
             password='lamiapassword', username='lamia')

larini = User(email='larini@example.com',
              password='larinipassword', username='larini')

storage.new(eyad)
storage.new(lamia)
storage.new(larini)
storage.save()


post1 = Post(title='testpost', user_id=eyad.id, text='test_text')
post2 = Post(title='testpost2', user_id=lamia.id, text='test_text')
post3 = Post(title='testpost3', user_id=larini.id, text='test_text')

storage.new(post1)
storage.new(post2)
storage.new(post3)
storage.save()


eyad_likes_post1 = PostLike(user_id=eyad.id, post_id=post1.id)
eyad_likes_post2 = PostLike(user_id=eyad.id, post_id=post2.id)
eyad_likes_post3 = PostLike(user_id=eyad.id, post_id=post3.id)
lamia_likes_post1 = PostLike(user_id=lamia.id, post_id=post1.id)
larini_likes_post1 = PostLike(user_id=larini.id, post_id=post1.id)

larini_comments_post1 = PostComment(
    user_id=larini.id, post_id=post1.id, text='test_comment1')

lamia_comments_post1 = PostComment(
    user_id=lamia.id, post_id=post1.id, text='test_comment2')

storage.new(eyad_likes_post1)
storage.new(eyad_likes_post2)
storage.new(eyad_likes_post3)
storage.new(lamia_likes_post1)
storage.new(larini_likes_post1)
storage.new(larini_comments_post1)
storage.new(lamia_comments_post1)

storage.save()

print([post.to_dict()['title'] for post in storage.all(Post).values()])


post1_likes = [like.to_dict() for like in post1.likes]
post1_comments = [comment.to_dict() for comment in post1.comments]

for plike in post1_likes:
    print(storage.get(User, plike['user_id']).to_dict()['email'])

for pcomment in post1_comments:
    print(pcomment['text'])

cleanup_users()

storage.save()


def cleanup_user_related_data(user):
    # Delete all likes by the user
    for like in user.post_likes:
        storage.delete(like)

    # Delete all comments by the user
    for comment in user.post_comments:
        storage.delete(comment)

    # Delete all posts by the user
    for post in user.posts:
        storage.delete(post)

    # Finally, delete the user
    storage.delete(user)
    storage.save()
