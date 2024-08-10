#!/usr/bin/python3
"""
Test User class for expected behavior and documentation
"""

from datetime import datetime
import inspect
import models
from models.user import User
from models.base_model import BaseModel
import pep8
import unittest
from models.engine.db_storage_engine import DBStorage


class TestUserDocs(unittest.TestCase):
    """Tests to check the documentation and style of User class"""
    @classmethod
    def setUpClass(cls):
        """Set up for the doc tests"""
        cls.user_f = inspect.getmembers(User, inspect.isfunction)

    def test_pep8_conformance_user(self):
        """Test that models/user.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['models/user.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_pep8_conformance_test_user(self):
        """Test that tests/test_models/test_user.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tests/test_models/test_user.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_user_module_docstring(self):
        """Test for the user.py module docstring"""
        self.assertIsNot(models.user.__doc__, None,
                         "user.py needs a docstring")
        self.assertTrue(len(models.user.__doc__) >= 1,
                        "user.py needs a docstring")

    def test_user_class_docstring(self):
        """Test for the City class docstring"""
        self.assertIsNot(User.__doc__, None,
                         "User class needs a docstring")
        self.assertTrue(len(User.__doc__) >= 1,
                        "User class needs a docstring")

    def test_user_func_docstrings(self):
        """Test for the presence of docstrings in User methods"""
        for func in self.user_f:
            self.assertIsNot(func[1].__doc__, None,
                             "{:s} method needs a docstring".format(func[0]))
            self.assertTrue(len(func[1].__doc__) >= 1,
                            "{:s} method needs a docstring".format(func[0]))


class TestUser(unittest.TestCase):
    """Test the user class"""

    def setUp(self):
        """Set up method which runs before all the tests"""

        self.test_user = User(email='user@example.com',
                              password='password', username='username')
        models.storage.new(self.test_user)
        models.storage.save()

        self.user_json = self.test_user.to_dict()
        self.user_json['password'] = 'testpassword'
        self.user_json['id'] = '123-456-789'
        self.user_with_kwargs = User(**self.user_json)
        models.storage.new(self.user_with_kwargs)
        models.storage.save()

    def tearDown(self):

        try:
            models.storage.delete(self.test_user)
            models.storage.delete(self.user_with_kwargs)
            models.storage.save()
        except Exception as e:
            try:
                del self.model
                del self.user_with_kwargs

            except Exception as e:
                pass

    def test_test(self):
        self.assertEqual(12, 12)

    def test_str(self):
        """test string representation"""
        self.assertEqual(self.test_user.username, "username")
        self.test_user.my_number = 89
        models.storage.save()
        self.assertEqual(self.test_user.my_number, 89)
        self.assertEqual(str(self.test_user), "[User] ({}) {}".format(
            self.test_user.id, self.test_user.__dict__))

    def test_types(self):
        """test everything's type"""
        self.assertIsInstance(self.test_user, BaseModel)
        self.assertIsInstance(self.test_user, User)
        self.assertTrue(issubclass(User, BaseModel))

        self.assertIsInstance(self.test_user.created_at, datetime)
        self.assertIsInstance(self.test_user.updated_at, datetime)

        self.assertIsInstance(self.user_json, dict)
        self.assertIsInstance(self.user_json['created_at'], str)
        self.assertIsInstance(self.user_json['updated_at'], str)
        self.assertIsInstance(self.user_json['__class__'], str)
        self.assertIsInstance(self.user_json['email'], str)
        self.assertIsInstance(self.user_json['username'], str)
        self.assertIsInstance(self.test_user.id, str)
        self.assertIsInstance(self.test_user.img, bytes)

        self.assertTrue(hasattr(self.test_user, "email"))
        self.assertTrue(self.test_user.email == "user@example.com")

    def test_dictRepresentation(self):
        """test the to dict method"""
        self.test_user.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.test_user.username = 'last_name'
        self.user_json = self.test_user.to_dict()

        with open('resources/default_male_img.jpg', 'rb') as file:
            img = file.read()

        self.assertDictEqual(self.user_json, {
            '__class__': 'User',
            'email': 'user@example.com',
            'updated_at': self.test_user.updated_at.isoformat(),
            'created_at': self.test_user.created_at.isoformat(),
            'id': self.test_user.id,
            'img': img,
            'username': 'last_name'
        })

    def test_save(self):
        """test the save method if it changes the updated at"""
        up_at1 = self.test_user.updated_at
        self.test_user.save()
        self.assertNotEqual(up_at1, self.test_user.updated_at)

    def test_delete(self):
        """test the delete method if it deletes the user"""
        self.test_user2 = User(email='user@example.com',
                               password='password', username='username')
        models.storage.new(self.test_user2)
        models.storage.save()

        self.assertIsNotNone(models.storage.get(User, self.test_user2.id))

        models.storage.delete(self.test_user2)
        models.storage.save()

        self.assertIsNone(models.storage.get(User, self.test_user2))
