#!/usr/bin/python3

from models import storage


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
