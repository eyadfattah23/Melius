#!/usr/bin/python3
"""
Test User class for expected behavior and documentation
"""

from datetime import datetime, timezone
import inspect
import models
from models.user import User
from models.base_model import BaseModel
import pep8
import unittest
from models.engine.db_storage_engine import DBStorage
from hashlib import md5
from sqlalchemy.exc import DataError, IntegrityError, PendingRollbackError
from passlib.hash import bcrypt


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
                              password='Pass#word1', username='username')
        models.storage.new(self.test_user)
        models.storage.save()

        self.user_json = self.test_user.to_dict()
        self.user_json['password'] = 'Pass#word1'
        self.user_json['id'] = '123-456-789'
        self.user_json['email'] = '1userjson@example.com'
        self.user_with_kwargs = User(**self.user_json)
        models.storage.new(self.user_with_kwargs)
        models.storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""
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
        self.cleanup_users()

    def cleanup_users(self):
        """Utility method to remove all users from the database"""
        for user in models.storage.all(User).values():
            models.storage.delete(user)
        models.storage.save()

    def test_test(self):
        """mock test to test setUp and teardown"""
        self.assertEqual(12, 12)

    def test_password_hashing(self):
        """Test that the password is hashed and verified correctly"""
        self.assertTrue(bcrypt.verify(
            'Pass#word1', self.test_user.password_hash))
        self.assertFalse(bcrypt.verify(
            'wrongPass#word1', self.test_user.password_hash))

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
        self.assertIsInstance(self.test_user.img, str)

        self.assertTrue(hasattr(self.test_user, "email"))
        self.assertTrue(self.test_user.email == "user@example.com")

    def test_dictRepresentation(self):
        """test the to dict method"""
        self.test_user.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.test_user.username = 'last_name'
        self.user_json = self.test_user.to_dict()

        img = 'resources/default_male_img.jpg'

        self.assertDictEqual(self.user_json, {
            '__class__': 'User',
            'email': 'user@example.com',
            'updated_at': self.test_user.updated_at.isoformat()
            .replace('+00:00', ''),
            'created_at': self.test_user.created_at.isoformat()
            .replace('+00:00', ''),
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
        self.test_user2 = User(email='user2@example.com',
                               password='Pass#word1', username='username')
        models.storage.new(self.test_user2)
        models.storage.save()

        self.assertIsNotNone(models.storage.get(User, self.test_user2.id))

        models.storage.delete(self.test_user2)
        models.storage.save()

        self.assertIsNone(models.storage.get(User, self.test_user2))

    def test_Nones(self):
        """test if the none attributes gives the expected output"""
        with self.assertRaises((AttributeError, TypeError)):
            user = User(email=None, password=None, username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises((AttributeError, TypeError)):
            user = User(email='user@kkk.com', password=None, username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(ValueError):
            user = User(email='', password=None, username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(ValueError):
            user = User(email='      ', password=None, username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises((ValueError, AttributeError, TypeError)):
            user = User(email='user@kkk.com', password='', username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(ValueError):
            user = User(email='user@kkk.com', password='     ', username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(AttributeError):
            user = User(email='user@kkk.com',
                        password='Pass#word1', username=None)
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(ValueError):
            user = User(email='user@kkk.com',
                        password='Pass#word1', username='')
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises(ValueError):
            user = User(email='user@kkk.com',
                        password='Pass#word1', username='		 ')
            models.storage.new(user)
            models.storage.save()
        with self.assertRaises((DataError, ValueError)):
            try:
                user = User(email='user@kkk.com',
                            password='Pass#word1', username='f'*1000)
                models.storage.new(user)
                models.storage.save()
            except (DataError, IntegrityError):
                models.storage.rollback()
                # Rollback the session to avoid PendingRollbackError
                raise
                # Re-raise to ensure the test correctly captures this error

    def test_user_with_img_none(self):
        """Test user creation when img is None"""
        user_with_no_img = User(email='test2@example.com',
                                password='Pass#word2',
                                username='testuser2', img=None)
        models.storage.new(user_with_no_img)
        models.storage.save()

        self.assertIsNotNone(user_with_no_img.img)
        self.assertIsInstance(user_with_no_img.img, str)

        models.storage.delete(user_with_no_img)
        models.storage.save()

    def test_set_password_encryption(self):
        """Test that the password is encrypted using bcrypt"""
        password = 'Pass#word1'
        user = User(email='newuser@example.com',
                    password=password, username='newuser')

        # Ensure that the password is hashed and not stored as plain text
        self.assertNotEqual(user.password_hash, password)
        self.assertTrue(user.verify_password(password))

    def test_user_to_dict_contains_no_password(self):
        """Test that the dictionary representation
        does not include the password"""
        user_dict = self.test_user.to_dict()
        self.assertNotIn('password', user_dict)

    def test_reload_user_from_dict(self):
        """Test reloading a user object from a dictionary"""
        self.user_json['created_at'] = datetime.now(
            timezone.utc).isoformat().replace('+00:00', '')

        self.user_json['updated_at'] = datetime.now(
            timezone.utc).isoformat().replace('+00:00', '')

        self.user_json['email'] = "newuser2@example.com"

        new_user = User(**self.user_json)
        self.assertEqual(new_user.id, self.user_json['id'])
        self.assertEqual(new_user.email, self.user_json['email'])
        self.assertEqual(new_user.username, self.user_json['username'])

        # Check that password was re-encrypted
        self.assertTrue(new_user.verify_password('Pass#word1'))

    def test_create_user_with_unique_email(self):
        """Test that a user with a unique email can be created"""
        user = User(email='newuser3@example.com',
                    password='Pass#word1', username='newuser')
        models.storage.new(user)
        models.storage.save()
        retrieved_user = models.storage.get(User, user.id)
        self.assertIsNotNone(retrieved_user)
        self.assertEqual(retrieved_user.email, 'newuser3@example.com')

    """def test_create_user_with_duplicate_email(self):
        Test that creating a user with a duplicate email raises an error
        with self.assertRaises(IntegrityError):
            duplicate_user = User(email='unique@example.com',
                                  password='AnotherPassword',
                                  username='anotheruser')
            models.storage.new(duplicate_user)
            models.storage.save()
            duplicate_user2 = User(email='unique@example.com',
                                   password='AnotherPassword',
                                   username='anotheruser')
            models.storage.new(duplicate_user)
            models.storage.save()"""

    def test_email_format_validation(self):
        """Test that invalid email formats are rejected"""
        with self.assertRaises(ValueError):
            User(email='invalid-email-format',
                 password='Pass#word1', username='baduser')

        with self.assertRaises(ValueError):
            User(email='another-invalid-email@',
                 password='Pass#word1', username='anotherbaduser')

    def test_valid_email_format(self):
        """Test that a valid email format is accepted"""
        valid_user = User(email='valid.email@example.com',
                          password='Pass#word1', username='validuser')
        models.storage.new(valid_user)
        models.storage.save()
        retrieved_user = models.storage.get(User, valid_user.id)
        self.assertIsNotNone(retrieved_user)
        self.assertEqual(retrieved_user.email, 'valid.email@example.com')

    def test_valid_password_format(self):
        """Test that a valid email format is accepted"""
        with self.assertRaises(ValueError, ):
            user = User(email='user@kkk.com',
                        password='password', username=None)
            models.storage.new(user)
            models.storage.save()


'''

    # don't know how to test large data yet but working on it

    def test_handling_large_data(self):
        """Test handling of large data in attributes"""
        user = User(
            # Adjust to fit within the column length
            email="a" * 255 + "@example.com",
            password="b" * 255,
            username="c" * 255,
            # Assuming img is a BLOB, adjust the size accordingly
            img=b'\xff\xd8\xff\xe0' * 5000
        )
        with self.assertRaises(PendingRollbackError):
            models.storage.new(user)
            models.storage.save()'''
