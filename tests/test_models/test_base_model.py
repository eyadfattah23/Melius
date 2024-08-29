#!/usr/bin/python3
"""Test BaseModel for expected behavior and documentation"""
from datetime import datetime, timezone
import inspect
import models
import pep8 as pycodestyle
import time
import unittest
from unittest import mock
BaseModel = models.base_model.BaseModel
module_doc = models.base_model.__doc__


class TestBaseModelDocs(unittest.TestCase):
    """Tests to check the documentation and style of BaseModel class"""

    @classmethod
    def setUpClass(self):
        """Set up for docstring tests"""
        self.base_funcs = inspect.getmembers(BaseModel, inspect.isfunction)

    def test_pep8_conformance(self):
        """Test that models/base_model.py conforms to PEP8."""
        for path in ['models/base_model.py',
                     'tests/test_models/test_base_model.py']:
            with self.subTest(path=path):
                errors = pycodestyle.Checker(path).check_all()
                self.assertEqual(errors, 0)

    def test_module_docstring(self):
        """Test for the existence of module docstring"""
        self.assertIsNot(module_doc, None,
                         "base_model.py needs a docstring")
        self.assertTrue(len(module_doc) > 1,
                        "base_model.py needs a docstring")

    def test_class_docstring(self):
        """Test for the BaseModel class docstring"""
        self.assertIsNot(BaseModel.__doc__, None,
                         "BaseModel class needs a docstring")
        self.assertTrue(len(BaseModel.__doc__) >= 1,
                        "BaseModel class needs a docstring")

    def test_func_docstrings(self):
        """Test for the presence of docstrings in BaseModel methods"""
        for func in self.base_funcs:
            with self.subTest(function=func):
                self.assertIsNot(
                    func[1].__doc__,
                    None,
                    "{:s} method needs a docstring".format(func[0])
                )
                self.assertTrue(
                    len(func[1].__doc__) > 1,
                    "{:s} method needs a docstring".format(func[0])
                )


class TestBaseModel(unittest.TestCase):
    """Test the BaseModel class"""

    def setUp(self):
        """Set up method which runs before all the tests"""
        self.model = BaseModel()
        self.model.name = 'test_model'
        self.model.number = 123

        self.model_json = self.model.to_dict()

        self.args_base = BaseModel(89, 'model', 0)
        self.base_with_kwargs = BaseModel(**self.model_json)

        self.maxDiff = None

    def tearDown(self):
        """Tear down method which runs after all the tests"""
        try:
            models.storage.delete(self.model)
            models.storage.delete(self.args_base)
            models.storage.delete(self.base_with_kwargs)
        except Exception as e:
            try:
                del self.model
                del self.args_base
                del self.base_with_kwargs

            except Exception as e:
                pass

        try:
            del self.model
            del self.args_base
            del self.base_with_kwargs

        except Exception as e:
            pass

    def test_str(self):
        """test string representation"""
        self.assertEqual(self.model.name, "test_model")
        self.assertEqual(self.model.number, 123)
        self.assertEqual(str(self.model), "[BaseModel] ({}) {}".format(
            self.model.id, self.model.__dict__))

    def test_types(self):
        """test everything's type"""
        self.assertIsInstance(self.model, BaseModel)

        self.assertIsInstance(self.model.created_at, datetime)
        self.assertIsInstance(self.model.updated_at, datetime)

        self.assertIsInstance(self.model_json, dict)
        self.assertIsInstance(self.model_json['created_at'], str)
        self.assertIsInstance(self.model_json['updated_at'], str)
        self.assertIsInstance(self.model_json['__class__'], str)

        self.assertIsInstance(self.model.id, str)

    def test_dictRepresentation(self):
        """test the to dict method"""
        self.model.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.model_json = self.model.to_dict()
        self.assertDictEqual(self.model_json, {
            'number': 123,
            'name': 'test_model',
            '__class__': 'BaseModel',
            'updated_at': self.model.updated_at.isoformat()
            .replace('+00:00', ''),
            'created_at': self.model.created_at.isoformat()
            .replace('+00:00', ''),
            'id': self.model.id
        })

    def test_args(self):
        """test if the *args is read (it shouldn't be)"""
        with self.assertRaises(AttributeError) as e:
            self.assertIsNone(self.args_base.number)
            self.assertIsNone(self.args_base.number)
            self.assertIsNone(self.args_base.name)
            self.assertIsNone(self.args_base.updated_at)

        self.assertTrue(89 not in self.args_base.to_dict())
        self.assertTrue("my_model" not in self.args_base.to_dict())
        self.assertTrue(0 not in self.args_base.to_dict())

        self.assertIsInstance(self.args_base, BaseModel)
        self.assertIsNotNone(self.args_base.id)
        self.assertIsNotNone(self.args_base.created_at)
        self.assertIsNotNone(self.args_base.updated_at)

    def test_kwargs(self):
        """test initialization of a base model instance with kwargs"""

        self.assertEqual(self.base_with_kwargs.id, self.model.id)
        self.assertEqual(self.base_with_kwargs.created_at.isoformat(),
                         self.model.created_at.isoformat().
                         replace('+00:00', ''))
        self.assertEqual(self.base_with_kwargs.updated_at.isoformat(),
                         self.model.updated_at.isoformat().
                         replace('+00:00', ''))
        self.assertEqual(self.base_with_kwargs.name, self.model.name)
        self.assertEqual(self.base_with_kwargs.number,
                         self.model.number)

        self.assertDictEqual(self.base_with_kwargs.to_dict(),
                             self.model.to_dict())

        self.assertEqual(self.base_with_kwargs.updated_at,
                         self.model.updated_at.replace(tzinfo=None))

    def test_none_kwargs(self):
        """test initialization of a base model instance with no kwargs"""
        base2 = BaseModel(None)
        self.assertIsInstance(base2, BaseModel)

        self.assertIsInstance(base2.created_at, datetime)
        self.assertIsInstance(base2.updated_at, datetime)

        self.assertIsInstance(base2.to_dict(), dict)
        self.assertIsInstance(base2.to_dict()['created_at'], str)
        self.assertIsInstance(base2.to_dict()['updated_at'], str)
        self.assertIsInstance(base2.to_dict()['__class__'], str)

        self.assertIsInstance(base2.id, str)

    def test_args_and_kwargs(self):
        """test initialization of a base model instance with args
                and no kwargs"""
        base3 = BaseModel(1, 2, name='best_school', num=89)
        base4 = BaseModel(name='bestest_school', num=8989)
        self.assertIsInstance(base3, BaseModel)
        self.assertEqual(base3.name, 'best_school')
        self.assertEqual(base3.num, 89)
        self.assertIsInstance(base4, BaseModel)
        self.assertEqual(base4.name, 'bestest_school')
        self.assertEqual(base4.num, 8989)
