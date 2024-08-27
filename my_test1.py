#!/usr/bin/python3

from models.base_model import BaseModel
from models.article import *
from models.user import *
from models import storage

user = User(email='ueller56@gmail.com',
            password='Eyad#1235', username='username12')

article = Article(title='title', content='content')

like = ArticleLike(user_id=user.id, article_id=article.id)
comment = ArticleComment(
    user_id=user.id, article_id=article.id, text='comment')

storage.new(user)
storage.new(article)
storage.new(like)
storage.new(comment)
storage.save()


print(storage.all())

storage.delete(user)
storage.save()
print(storage.all())
