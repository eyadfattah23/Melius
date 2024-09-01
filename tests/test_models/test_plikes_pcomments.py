#!/usr/bin/python3
"""
Test PostLike, PostComment, ArticleLike, ArticleComment class for expected behavior and documentation
"""

from datetime import datetime, timezone
import unittest
from models import storage
from models.post import Post, PostLike, PostComment
from models.user import User
from models.base_model import BaseModel
from sqlalchemy.exc import IntegrityError, DataError


class TestPostLikePostComment(unittest.TestCase):
    """Test the PostLike and PostComment classes"""

    def setUp(self):
        """Set up method which runs before all the tests"""
        self.eyad = User(email='eyad@example.com',
                         password='Pass#word1', username='eyad')
        self.lamia = User(email='lamia@example.com',
                          password='Pass#word1', username='lamia')
        self.larini = User(email='larini@example.com',
                           password='Pass#word1', username='larini')

        self.post1 = Post(title='testpost',
                          user_id=self.eyad.id, text='test_text')
        self.post2 = Post(title='testpost2',
                          user_id=self.lamia.id, text='test_text')
        self.post3 = Post(title='testpost3',
                          user_id=self.larini.id, text='test_text')

        self.eyad_likes_post1 = PostLike(
            user_id=self.eyad.id, post_id=self.post1.id)
        self.eyad_likes_post2 = PostLike(
            user_id=self.eyad.id, post_id=self.post2.id)
        self.eyad_likes_post3 = PostLike(
            user_id=self.eyad.id, post_id=self.post3.id)
        self.lamia_likes_post1 = PostLike(
            user_id=self.lamia.id, post_id=self.post1.id)
        self.larini_likes_post1 = PostLike(
            user_id=self.larini.id, post_id=self.post1.id)

        self.larini_comments_post1 = PostComment(
            user_id=self.larini.id, post_id=self.post1.id, text='test_comment1')
        self.lamia_comments_post1 = PostComment(
            user_id=self.lamia.id, post_id=self.post1.id, text='test_comment2')

        storage.new(self.eyad)
        storage.new(self.lamia)
        storage.new(self.larini)
        storage.new(self.post1)
        storage.new(self.post2)
        storage.new(self.post3)

        storage.new(self.eyad_likes_post1)
        storage.new(self.eyad_likes_post2)
        storage.new(self.eyad_likes_post3)
        storage.new(self.lamia_likes_post1)
        storage.new(self.larini_likes_post1)

        storage.new(self.larini_comments_post1)
        storage.new(self.lamia_comments_post1)
        storage.save()

        self.test_post = Post(title="test post for json", user_id=self.eyad.id)
        storage.new(self.test_post)
        storage.save()
        self.like_json = self.eyad_likes_post1.to_dict()
        self.like_json['post_id'] = self.test_post.id
        self.comment_json = self.larini_comments_post1.to_dict()
        self.comment_json['post_id'] = self.test_post.id

        self.like_with_kwargs = PostLike(**self.like_json)
        self.like_with_kwargs.id = '123-456-789'
        self.comment_with_kwargs = PostComment(**self.comment_json)
        self.comment_with_kwargs.id = '123-456-789'
        storage.new(self.like_with_kwargs)
        storage.new(self.comment_with_kwargs)
        storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""
        self.cleanup_likes_comments()
        self.cleanup_posts()
        self.cleanup_users()

    def cleanup_users(self):
        """Utility method to remove all users from the database"""
        for user in storage.all(User).values():
            storage.delete(user)
        storage.save()

    def cleanup_posts(self):
        """Utility method to remove all posts from the database"""
        for post in storage.all(Post).values():
            storage.delete(post)
        storage.save()

    def cleanup_likes_comments(self):
        """Utility method to remove all likes and comments from the database"""
        for like in storage.all(PostLike).values():
            storage.delete(like)
        for comment in storage.all(PostComment).values():
            storage.delete(comment)
        storage.save()

    def test_mock(self):
        """Mock test to test setUp and tearDown"""
        self.assertEqual(12, 12)

    def test_str_representation(self):
        """Test string representation of PostLike and PostComment"""
        self.assertEqual(str(self.eyad_likes_post1),
                         f"[PostLike] ({self.eyad_likes_post1.id}) {self.eyad_likes_post1.__dict__}")
        self.assertEqual(str(self.eyad_likes_post2),
                         f"[PostLike] ({self.eyad_likes_post2.id}) {self.eyad_likes_post2.__dict__}")
        self.assertEqual(str(self.larini_comments_post1),
                         f"[PostComment] ({self.larini_comments_post1.id}) {self.larini_comments_post1.__dict__}")

    def test_instance_types(self):
        """Test the types of instances and their attributes"""
        self.assertIsInstance(self.eyad_likes_post1, BaseModel)
        self.assertIsInstance(self.eyad_likes_post1, PostLike)
        self.assertIsInstance(self.larini_comments_post1, BaseModel)
        self.assertIsInstance(self.larini_comments_post1, PostComment)

        self.assertTrue(issubclass(PostLike, BaseModel))
        self.assertTrue(issubclass(PostComment, BaseModel))

    def test_datetime_and_json_types(self):
        """Test the datetime attributes and the to_dict method output types"""
        self.assertIsInstance(self.eyad_likes_post1.created_at, datetime)
        self.assertIsInstance(self.eyad_likes_post1.updated_at, datetime)
        self.assertIsInstance(self.larini_comments_post1.created_at, datetime)
        self.assertIsInstance(self.larini_comments_post1.updated_at, datetime)

        self.assertIsInstance(self.like_json, dict)
        self.assertIsInstance(self.like_json['created_at'], str)
        self.assertIsInstance(self.like_json['updated_at'], str)
        self.assertIsInstance(self.like_json['__class__'], str)

        self.assertIsInstance(self.comment_json, dict)
        self.assertIsInstance(self.comment_json['created_at'], str)
        self.assertIsInstance(self.comment_json['updated_at'], str)
        self.assertIsInstance(self.comment_json['__class__'], str)
        self.assertIsInstance(self.comment_json['text'], str)
        self.assertIsInstance(self.larini_comments_post1.id, str)
        self.assertIsInstance(self.larini_comments_post1.user_id, str)

    def test_postcomment_text(self):
        """Test the text of the PostComment"""
        self.assertEqual(self.larini_comments_post1.text, "test_comment1")

    def test_dict_representation(self):
        """Test the to_dict method of PostComment"""
        self.larini_comments_post1.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.larini_comments_post1.text = 'last_name'
        comment_json = self.larini_comments_post1.to_dict()

        expected_dict = {
            '__class__': 'PostComment',
            'updated_at': self.larini_comments_post1.updated_at.isoformat().replace('+00:00', ''),
            'created_at': self.larini_comments_post1.created_at.isoformat().replace('+00:00', ''),
            'user_id': self.larini.id,
            'post_id': self.post1.id,
            'id': 'fa5f7cec-e7e1-436f-ba49-35241277adac',
            'text': 'last_name'
        }

        self.assertDictEqual(comment_json, expected_dict)

    def test_save_updates_timestamp(self):
        """Test the save method to ensure it updates the updated_at timestamp"""
        up_at1 = self.larini_comments_post1.updated_at
        self.larini_comments_post1.save()
        self.assertNotEqual(up_at1, self.larini_comments_post1.updated_at)

    def test_likes_comments_linking(self):
        """Test the linking between likes, comments, posts, and users"""

        post11 = Post(title='testpost', user_id=self.eyad.id, text='test_text')
        post21 = Post(title='testpost2',
                      user_id=self.lamia.id, text='test_text')
        post31 = Post(title='testpost3',
                      user_id=self.larini.id, text='test_text')

        eyad_likes_post11 = PostLike(user_id=self.eyad.id, post_id=post11.id)
        eyad_likes_post21 = PostLike(user_id=self.eyad.id, post_id=post21.id)
        eyad_likes_post31 = PostLike(user_id=self.eyad.id, post_id=post31.id)
        lamia_likes_post11 = PostLike(user_id=self.lamia.id, post_id=post11.id)
        larini_likes_post11 = PostLike(
            user_id=self.larini.id, post_id=post11.id)

        larini_comments_post11 = PostComment(
            user_id=self.larini.id, post_id=post11.id, text='test_comment1')
        lamia_comments_post11 = PostComment(
            user_id=self.lamia.id, post_id=post11.id, text='test_comment2')

        storage.new(post11)
        storage.new(post21)
        storage.new(post31)

        storage.new(eyad_likes_post11)
        storage.new(eyad_likes_post21)
        storage.new(eyad_likes_post31)
        storage.new(lamia_likes_post11)
        storage.new(larini_likes_post11)

        storage.new(larini_comments_post11)
        storage.new(lamia_comments_post11)
        storage.save()

        likes_count = len(storage.all(PostLike))
        self.assertEqual(likes_count, 11)
        comments_count = len(storage.all(PostComment))
        self.assertEqual(comments_count, 5)

    def test_duplicate_like(self):
        user_id = self.eyad.id
        post_id = self.post2.id

        # Create the first like

        # Attempt to create a duplicate like

        with self.assertRaises(IntegrityError):
            like1 = PostLike(user_id=user_id, post_id=post_id)
            like2 = PostLike(user_id=user_id, post_id=post_id)
            storage.new(like1)
            storage.new(like2)
            storage.save()
        with self.assertRaises(IntegrityError):
            like1 = PostLike(user_id='1234565', post_id='eyadadkadjg')
            like2 = PostLike(user_id='user_id', post_id='4852354')
            storage.new(like1)
            storage.new(like2)
            storage.save()

    def test_edge_comments(self):
        """tests for empty and too long comments"""
        with self.assertRaises(ValueError):
            PostComment(text='', user_id=self.eyad.id)
    # Test too long title
        with self.assertRaises(DataError):
            try:
                storage.new(
                    PostComment(text='5' * 123456, user_id=self.eyad.id, post_id=self.post1))
                storage.save()
            except (DataError, IntegrityError):
                storage.rollback()
                # Rollback the session to avoid PendingRollbackError
                raise
                # Re-raise to ensure the test correctly captures this error

        with self.assertRaises(AttributeError):
            PostComment(text=None, user_id=self.eyad.id)

        with self.assertRaises(ValueError):
            PostComment(text='    ', user_id=self.eyad.id)
