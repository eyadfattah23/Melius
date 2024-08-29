#!/usr/bin/python3
"""
Test TimerHistory class for expected behavior and documentation
"""

from datetime import datetime, timezone
import inspect
import models
from models.timer_history import TimerHistory
import models.timer_history
from models.user import User
from models.base_model import BaseModel
import pep8
import unittest
from models.engine.db_storage_engine import DBStorage
from sqlalchemy.exc import IntegrityError, DataError


class TestTimerHistoryDocs(unittest.TestCase):
    """Tests to check the documentation and style of TimerHistory class"""
    @classmethod
    def setUpClass(cls):
        """Set up for the doc tests"""
        cls.timerhistory_f = inspect.getmembers(
            TimerHistory, inspect.isfunction)

    def test_pep8_conformance_TimerHistory(self):
        """Test that models/timer_history.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['models/timer_history.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_pep8_conformance_test_TimerHistory(self):
        """Test that tests/test_models/timer_history.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tests/test_models/test_timer_history.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_TimerHistory_module_docstring(self):
        """Test for the timer_history.py module docstring"""
        self.assertIsNot(models.timer_history.__doc__, None,
                         "timer_history.py needs a docstring")
        self.assertTrue(len(models.timer_history.__doc__) >= 1,
                        "timer_history.py needs a docstring")

    def test_TimerHistory_class_docstring(self):
        """Test for the City class docstring"""
        self.assertIsNot(TimerHistory.__doc__, None,
                         "TimerHistory class needs a docstring")
        self.assertTrue(len(TimerHistory.__doc__) >= 1,
                        "TimerHistory class needs a docstring")

    def test_TimerHistory_func_docstrings(self):
        """Test for the presence of docstrings in TimerHistory methods"""
        for func in self.timerhistory_f:
            self.assertIsNot(func[1].__doc__, None,
                             "{:s} method needs a docstring".format(func[0]))
            self.assertTrue(len(func[1].__doc__) >= 1,
                            "{:s} method needs a docstring".format(func[0]))


class TestTimerHistory(unittest.TestCase):
    """Test the TimerHistory class"""

    def setUp(self):
        self.maxDiff = None
        """Set up method which runs before all the tests"""

        self.test_user = User(email='timertest@example.com',
                              password='Pass#word1', username='username')
        models.storage.new(self.test_user)
        models.storage.save()

        self.test_timer = TimerHistory(user_id=self.test_user.id)
        models.storage.new(self.test_timer)
        models.storage.save()

        self.timer_json = self.test_timer.to_dict()

        self.test_user2 = User(email='timertestuser2@example.com',
                               password='Pass#word1', username='username')
        models.storage.new(self.test_user2)
        models.storage.save()

        self.timer_with_kwargs = TimerHistory(**self.timer_json)
        self.timer_with_kwargs.id = '123-456-789'
        self.timer_with_kwargs.user_id = self.test_user2.id

        models.storage.new(self.timer_with_kwargs)
        models.storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""
        try:

            self.cleanup_timers()
            self.cleanup_users()

            models.storage.save()
        except Exception as e:
            pass

    def cleanup_users(self):
        """Utility method to remove all users from the database"""
        for user in models.storage.all(User).values():
            models.storage.delete(user)
        models.storage.save()

    def cleanup_timers(self):
        """Utility method to remove all timers from the database"""
        for timer in models.storage.all(TimerHistory).values():
            models.storage.delete(timer)
        models.storage.save()

    def test_test(self):
        """mock test to test setUp and teardown"""
        self.assertEqual(12, 12)

    def test_str_representation(self):
        """Test string representation of PostLike and PostComment"""
        self.assertEqual(str(self.test_timer),
                         f"""[TimerHistory] \
({self.test_timer.id}) {self.test_timer.__dict__}""")
        self.test_timer.my_number = 89
        models.storage.save()
        self.assertEqual(self.test_timer.my_number, 89)
        self.assertEqual(str(self.test_timer), "[TimerHistory] ({}) {}".format(
            self.test_timer.id, self.test_timer.__dict__))

    def test_instance_types(self):
        """Test the types of instances and their attributes"""
        self.assertIsInstance(self.test_timer, BaseModel)
        self.assertIsInstance(self.test_timer, TimerHistory)

        self.assertTrue(issubclass(TimerHistory, BaseModel))

    def test_datetime_and_json_types(self):
        """Test the datetime attributes and the to_dict method output types"""
        self.assertIsInstance(self.test_timer.created_at, datetime)
        self.assertIsInstance(self.test_timer.updated_at, datetime)
        self.assertIsInstance(self.test_timer.start_date, datetime)
        self.assertIsInstance(self.test_timer.reset_date, datetime)

        self.assertIsInstance(self.timer_json, dict)
        self.assertIsInstance(self.timer_json['created_at'], str)
        self.assertIsInstance(self.timer_json['updated_at'], str)
        self.assertIsInstance(self.timer_json['start_date'], datetime)
        self.assertIsInstance(self.timer_json['reset_date'], datetime)
        self.assertIsInstance(self.timer_json['__class__'], str)
        self.assertIsInstance(self.test_timer.id, str)
        self.assertIsInstance(self.test_timer.user_id, str)

    def test_start_reset(self):
        """Test the dates of the TimerHistory"""
        self.assertEqual(self.test_timer.start_date,
                         self.test_timer.reset_date)

    def test_dict_representation(self):
        """Test the to_dict method of TimerHistory"""
        self.test_timer.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.test_timer.text = 'last_name'
        comment_json = self.test_timer.to_dict()

        expected_dict = {
            '__class__': 'TimerHistory',
            'updated_at': self.test_timer.updated_at.
            isoformat().replace('+00:00', ''),
            'created_at': self.test_timer.created_at.
            isoformat().replace('+00:00', ''),
            'start_date': self.test_timer.reset_date,
            'reset_date': self.test_timer.start_date,
            'max_time': 0,
            'no_tries': 0,
            'user_id': self.test_user.id,
            'id': 'fa5f7cec-e7e1-436f-ba49-35241277adac',
            'text': 'last_name'
        }

        self.assertDictEqual(comment_json, expected_dict)

    def test_save_updates_timestamp(self):
        """Test the save method to ensure it updates the
        updated_at timestamp"""
        up_at1 = self.test_timer.updated_at
        self.test_timer.save()
        self.assertNotEqual(up_at1, self.test_timer.updated_at)
