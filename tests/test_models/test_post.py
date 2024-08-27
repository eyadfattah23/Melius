#!/usr/bin/python3
"""
Test Post class for expected behavior and documentation
"""

from datetime import datetime
import inspect
import models
from models.post import Post
from models.user import User
from models.base_model import BaseModel
import pep8
import unittest
from models.engine.db_storage_engine import DBStorage
from sqlalchemy.exc import IntegrityError, DataError


class TestPostDocs(unittest.TestCase):
    """Tests to check the documentation and style of Post class"""
    @classmethod
    def setUpClass(cls):
        """Set up for the doc tests"""
        cls.post_f = inspect.getmembers(Post, inspect.isfunction)

    def test_pep8_conformance_post(self):
        """Test that models/post.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['models/post.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_pep8_conformance_test_post(self):
        """Test that tests/test_models/post.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tests/test_models/test_post.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_post_module_docstring(self):
        """Test for the post.py module docstring"""
        self.assertIsNot(models.post.__doc__, None,
                         "post.py needs a docstring")
        self.assertTrue(len(models.post.__doc__) >= 1,
                        "post.py needs a docstring")

    def test_post_class_docstring(self):
        """Test for the City class docstring"""
        self.assertIsNot(Post.__doc__, None,
                         "post class needs a docstring")
        self.assertTrue(len(Post.__doc__) >= 1,
                        "Post class needs a docstring")

    def test_post_func_docstrings(self):
        """Test for the presence of docstrings in Post methods"""
        for func in self.post_f:
            self.assertIsNot(func[1].__doc__, None,
                             "{:s} method needs a docstring".format(func[0]))
            self.assertTrue(len(func[1].__doc__) >= 1,
                            "{:s} method needs a docstring".format(func[0]))


class TestPost(unittest.TestCase):
    """Test the post class"""

    def setUp(self):
        """Set up method which runs before all the tests"""

        self.test_user = User(email='poststest@example.com',
                              password='Pass#word1', username='username')
        models.storage.new(self.test_user)
        models.storage.save()

        self.test_post = Post(
            title='test_post', user_id=self.test_user.id, text='text')

        models.storage.new(self.test_post)
        models.storage.save()

        self.post_json = self.test_post.to_dict()

        self.post_with_kwargs = Post(**self.post_json)
        self.post_with_kwargs.id = '123-456-789'
        models.storage.new(self.post_with_kwargs)
        models.storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""
        try:

            models.storage.delete(self.test_post)
            models.storage.delete(self.test_user)
            models.storage.delete(self.post_with_kwargs)

            models.storage.save()
        except Exception as e:
            pass

    def test_test(self):
        """mock test to test setUp and teardown"""
        self.assertEqual(12, 12)

    def test_str(self):
        """test string representation"""
        self.assertEqual(self.test_post.title, "test_post")
        self.test_post.my_number = 89
        models.storage.save()
        self.assertEqual(self.test_post.my_number, 89)
        self.assertEqual(str(self.test_post), "[Post] ({}) {}".format(
            self.test_post.id, self.test_post.__dict__))

    def test_types(self):
        """test everything's type"""
        self.assertIsInstance(self.test_post, BaseModel)
        self.assertIsInstance(self.test_post, Post)
        self.assertTrue(issubclass(Post, BaseModel))

        self.assertIsInstance(self.test_post.created_at, datetime)
        self.assertIsInstance(self.test_post.updated_at, datetime)

        self.assertIsInstance(self.post_json, dict)
        self.assertIsInstance(self.post_json['created_at'], str)
        self.assertIsInstance(self.post_json['updated_at'], str)
        self.assertIsInstance(self.post_json['__class__'], str)
        self.assertIsInstance(self.post_json['title'], str)
        self.assertIsInstance(self.post_json['text'], str)
        self.assertIsInstance(self.test_post.id, str)
        self.assertIsInstance(self.test_post.user_id, str)

        self.assertTrue(hasattr(self.test_post, "title"))
        self.assertTrue(self.test_post.title == "test_post")
        self.assertTrue(self.test_post.text == "text")

    def test_dictRepresentation(self):
        """test the to dict method"""
        self.test_post.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.test_post.title = 'last_name'
        self.post_json = self.test_post.to_dict()

        self.assertDictEqual(self.post_json, {
            '__class__': 'Post',
            'text': 'text',
            'updated_at': self.test_post.updated_at.isoformat(),
            'created_at': self.test_post.created_at.isoformat(),
            'user_id': self.test_user.id,
            'id': self.test_post.id,
            'title': 'last_name'
        })

    def test_save(self):
        """test the save method if it changes the updated at"""
        up_at1 = self.test_post.updated_at
        self.test_post.save()
        self.assertNotEqual(up_at1, self.test_post.updated_at)

    def test_delete(self):
        """test the delete method if it deletes the user"""
        self.test_user2 = User(email='user@example.com',
                               password='Pass#word1', username='username')

        models.storage.new(self.test_user2)
        models.storage.save()

        self.test_post2 = Post(
            title='test_post', user_id=self.test_user2.id, text="text22")

        models.storage.new(self.test_post2)
        models.storage.save()

        models.storage.delete(self.test_user2)
        models.storage.save()

        self.assertIsNone(models.storage.get(User, self.test_user2))
        self.assertIsNone(models.storage.get(Post, self.test_post2))

    def test_empty_title(self):
        """test empty title parameter"""
        with self.assertRaises(ValueError):
            Post(title='', user_id=self.test_user.id)
    # Test too long title
        with self.assertRaises(DataError):
            try:
                models.storage.new(
                    Post(title='5' * 123456, user_id=self.test_user.id))
                models.storage.save()
            except (DataError, IntegrityError):
                models.storage.rollback()
                # Rollback the session to avoid PendingRollbackError
                raise
                # Re-raise to ensure the test correctly captures this error

        with self.assertRaises(AttributeError):
            Post(title=None, user_id=self.test_user.id)

        with self.assertRaises(ValueError):
            Post(title='    ', user_id=self.test_user.id)
