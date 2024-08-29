#!/usr/bin/python3
"""
Test ArticleLike, ArticleComment classes for expected behavior and documentation
"""

from datetime import datetime, timezone
import unittest
from models import storage
from models.article import *
from models.user import User
from models.base_model import BaseModel
from sqlalchemy.exc import IntegrityError, DataError

article_content = """Here's how to reset your brain's dopamine levels and focus better than 97% of people:

The pursuit of cheap dopamine is humanity's worst addiction. Dopamine makes you crave the feelings you get from:

- Sex
- Pornography
- Drugs
- Alcohol
- Fast food
- Social media
- Watching series and movies
- Video games

Here's how to put an end to this:
**Dopamine Detox**

Take some time away from triggers and do the following:

- Go for a walk
- Listen to the Quran
- Engage in enjoyable activities like football, painting, or table tennis
- Spend time with friends

Do activities that will engage both your mind and body.

**Get Enough Sleep**

Lack of sleep causes you to lose:

- Your motivation
- Your focus
- Your energy

This helps you reclaim what brings you back to life.

To break this cycle, get 7 hours of sleep every day.

**Prioritize Exercise**

Exercise is a remedy for both your mind and body.

If you work out, you:

- Relieve stress
- Fight depression
- Ease anxiety
- Boost your mood
- Improve mental strength

This will help balance your dopamine levels.

**Eat Clean**

Balance your diet, but make 70% of your meal consist of protein.

Consume plenty of:

- Eggs
- Vegetables
- Fruits
- Meat (Fish/Chicken/Beef/Lamb)

This will help reduce food cravings.

If you can't regulate, then quit:

- Sugar
- Alcohol
- Excess caffeine

**Get Enough Sunlight**

Expose yourself to sunlight to stimulate serotonin production.

It's a hormone that makes you feel:

- Relaxed
- Better focused
- Mood-enhanced

Spend 15 minutes of your schedule enjoying sunlight.

**Tired of Living a Mediocre Life?**

## Unleash your unlimited potential with "The Path to Recovery from Porn and Masturbation Addiction" and change your world!'''
"""


class TestArticleLikeArticleComment(unittest.TestCase):
    """Test the ArticleLike and ArticleComment classes"""

    def setUp(self):
        """Set up method which runs before all the tests"""
        self.eyad = User(email='eyaddy@example.com',
                         password='Pass#word1', username='eyad')

        storage.new(self.eyad)

        self.article1 = Article(title='article_example1',
                                content=article_content)

        self.article2 = Article(title='article_example2',
                                content='article_content2')
        storage.new(self.article1)
        storage.new(self.article2)
        storage.save()

        self.eyad_likes_article1 = ArticleLike(
            user_id=self.eyad.id, article_id=self.article1.id)

        self.eyad_likes_article2 = ArticleLike(
            user_id=self.eyad.id, article_id=self.article2.id)

        self.eyad_comments_article1 = ArticleComment(
            user_id=self.eyad.id, article_id=self.article1.id, text='test_comment1')

        self.eyad_comments_article2 = ArticleComment(
            user_id=self.eyad.id, article_id=self.article2.id, text='test_comment2')

        storage.new(self.eyad_likes_article1)
        storage.new(self.eyad_likes_article2)
        storage.new(self.eyad_comments_article1)
        storage.new(self.eyad_comments_article2)
        storage.save()

        self.test_article = Article(
            title="test article for json", content="test_article_content")
        storage.new(self.test_article)
        storage.save()

        self.like_json = self.eyad_likes_article1.to_dict()
        self.like_json['article_id'] = self.test_article.id

        self.comment_json = self.eyad_comments_article1.to_dict()
        self.comment_json['article_id'] = self.test_article.id

        self.like_with_kwargs = ArticleLike(**self.like_json)
        self.like_with_kwargs.id = '123-456-789'
        self.comment_with_kwargs = ArticleComment(**self.comment_json)
        self.comment_with_kwargs.id = '123-456-789'

        storage.new(self.like_with_kwargs)
        storage.new(self.comment_with_kwargs)
        storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""
        self.cleanup_likes_comments()
        self.cleanup_articles()
        self.cleanup_users()

    def cleanup_users(self):
        """Utility method to remove all users from the database"""
        for user in storage.all(User).values():
            storage.delete(user)
        storage.save()

    def cleanup_articles(self):
        """Utility method to remove all Articless from the database"""
        for article in storage.all(Article).values():
            storage.delete(article)
        storage.save()

    def cleanup_likes_comments(self):
        """Utility method to remove all likes and comments from the database"""
        for like in storage.all(ArticleLike).values():
            storage.delete(like)
        for comment in storage.all(ArticleComment).values():
            storage.delete(comment)
        storage.save()

    def test_mock(self):
        """Mock test to test setUp and tearDown"""
        self.assertEqual(12, 12)

    def test_str_representation(self):
        """Test string representation of ArticleLike and ArticleComment"""
        self.assertEqual(str(self.eyad_likes_article1),
                         f"[ArticleLike] ({self.eyad_likes_article1.id}) {self.eyad_likes_article1.__dict__}")
        self.assertEqual(str(self.eyad_likes_article2),
                         f"[ArticleLike] ({self.eyad_likes_article2.id}) {self.eyad_likes_article2.__dict__}")
        self.assertEqual(str(self.eyad_comments_article1),
                         f"[ArticleComment] ({self.eyad_comments_article1.id}) {self.eyad_comments_article1.__dict__}")

    def test_instance_types(self):
        """Test the types of instances and their attributes"""
        self.assertIsInstance(self.eyad_likes_article1, BaseModel)
        self.assertIsInstance(self.eyad_likes_article1, ArticleLike)
        self.assertIsInstance(self.eyad_comments_article1, BaseModel)
        self.assertIsInstance(self.eyad_comments_article1, ArticleComment)

        self.assertTrue(issubclass(ArticleLike, BaseModel))
        self.assertTrue(issubclass(ArticleComment, BaseModel))

    def test_datetime_and_json_types(self):
        """Test the datetime attributes and the to_dict method output types"""
        self.assertIsInstance(self.eyad_likes_article1.created_at, datetime)
        self.assertIsInstance(self.eyad_likes_article2.updated_at, datetime)
        self.assertIsInstance(self.eyad_comments_article1.created_at, datetime)
        self.assertIsInstance(self.eyad_comments_article2.updated_at, datetime)

        self.assertIsInstance(self.like_json, dict)
        self.assertIsInstance(self.like_json['created_at'], str)
        self.assertIsInstance(self.like_json['updated_at'], str)
        self.assertIsInstance(self.like_json['__class__'], str)

        self.assertIsInstance(self.comment_json, dict)
        self.assertIsInstance(self.comment_json['created_at'], str)
        self.assertIsInstance(self.comment_json['updated_at'], str)
        self.assertIsInstance(self.comment_json['__class__'], str)
        self.assertIsInstance(self.comment_json['text'], str)
        self.assertIsInstance(self.eyad_comments_article1.id, str)
        self.assertIsInstance(self.eyad_comments_article1.user_id, str)

    def test_articlecomment_text(self):
        """Test the text of the articleComment"""
        self.assertEqual(self.eyad_comments_article1.text, "test_comment1")

    def test_dict_representation(self):
        """Test the to_dict method of articleComment"""
        self.eyad_comments_article1.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.eyad_comments_article1.text = 'last_name'
        comment_json = self.eyad_comments_article1.to_dict()

        expected_dict = {
            '__class__': 'ArticleComment',
            'updated_at': self.eyad_comments_article1.updated_at.isoformat()
            .replace('+00:00', ''),
            'created_at': self.eyad_comments_article1.created_at.isoformat()
            .replace('+00:00', ''),
            'user_id': self.eyad.id,
            'article_id': self.article1.id,
            'id': 'fa5f7cec-e7e1-436f-ba49-35241277adac',
            'text': 'last_name'
        }

        self.assertDictEqual(comment_json, expected_dict)

    def test_save_updates_timestamp(self):
        """Test the save method to ensure it updates the updated_at timestamp"""
        up_at1 = self.eyad_comments_article1.updated_at
        self.eyad_comments_article1.save()
        self.assertNotEqual(up_at1, self.eyad_comments_article1.updated_at)

    def test_duplicate_like(self):
        user_id = self.eyad.id
        article_id = self.article2.id

        # Create the first like

        # Attempt to create a duplicate like

        with self.assertRaises(IntegrityError):
            like1 = ArticleLike(user_id=user_id, article_id=article_id)
            like2 = ArticleLike(user_id=user_id, article_id=article_id)
            storage.new(like1)
            storage.new(like2)
            storage.save()
        with self.assertRaises(IntegrityError):
            like1 = ArticleLike(user_id='1234565', article_id='eyadadkadjg')
            like2 = ArticleLike(user_id='user_id', article_id='4852354')
            storage.new(like1)
            storage.new(like2)
            storage.save()

    def test_likes_comments_linking(self):
        """Test the linking between likes, comments, articles, and users"""
        likes_count = len(storage.all(ArticleLike))
        self.assertEqual(likes_count, 3)
        comments_count = len(storage.all(ArticleComment))
        self.assertEqual(comments_count, 3)

    def test_delete(self):
        """test the delete method if it deletes the user"""
        self.test_user2 = User(email='user@example.com',
                               password='Pass#word1', username='username')

        storage.new(self.test_user2)
        storage.save()

        self.test_article_like = ArticleLike(
            user_id=self.test_user2.id, article_id=self.article1.id)
        self.test_article_comment = ArticleComment(
            user_id=self.test_user2.id, article_id=self.article1.id, text='commenttesteetr')

        storage.new(self.test_article_like)
        storage.new(self.test_article_comment)
        storage.save()

        storage.delete(self.test_user2)
        storage.save()

        self.assertIsNone(storage.get(User, self.test_user2))
        self.assertIsNone(storage.get(ArticleLike, self.test_article_like))
        self.assertIsNone(storage.get(ArticleLike, self.test_article_comment))

    def test_edge_comments(self):
        """tests for empty and too long comments"""
        with self.assertRaises(ValueError):
            ArticleComment(text='', user_id=self.eyad.id)
    # Test too long title
        with self.assertRaises(DataError):
            try:
                storage.new(
                    ArticleComment(text='5' * 123456, user_id=self.eyad.id, article_id=self.article1))
                storage.save()
            except (DataError, IntegrityError):
                storage.rollback()
                # Rollback the session to avoid PendingRollbackError
                raise
                # Re-raise to ensure the test correctly captures this error

        with self.assertRaises(AttributeError):
            ArticleComment(text=None, user_id=self.eyad.id)

        with self.assertRaises(ValueError):
            ArticleComment(text='    ', user_id=self.eyad.id)
