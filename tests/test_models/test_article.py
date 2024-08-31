#!/usr/bin/python3
"""
Test Article class for expected behavior and documentation
"""

from datetime import datetime, timezone
import inspect
import models
from models.article import Article
from models.base_model import BaseModel
import pep8
import unittest
from models.engine.db_storage_engine import DBStorage


class TestArticleDocs(unittest.TestCase):
    """Tests to check the documentation and style of Article class"""
    @classmethod
    def setUpClass(cls):
        """Set up for the doc tests"""
        cls.article_f = inspect.getmembers(Article, inspect.isfunction)

    def test_pep8_conformance_article(self):
        """Test that models/article.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['models/article.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_pep8_conformance_test_article(self):
        """Test that tests/test_models/test_article.py conforms to PEP8."""
        pep8s = pep8.StyleGuide(quiet=True)
        result = pep8s.check_files(['tests/test_models/test_article.py'])
        self.assertEqual(result.total_errors, 0,
                         "Found code style errors (and warnings).")

    def test_article_module_docstring(self):
        """Test for the article.py module docstring"""
        self.assertIsNot(models.article.__doc__, None,
                         "article.py needs a docstring")
        self.assertTrue(len(models.article.__doc__) >= 1,
                        "article.py needs a docstring")

    def test_article_class_docstring(self):
        """Test for the City class docstring"""
        self.assertIsNot(Article.__doc__, None,
                         "Article class needs a docstring")
        self.assertTrue(len(Article.__doc__) >= 1,
                        "Article class needs a docstring")

    def test_article_func_docstrings(self):
        """Test for the presence of docstrings in Article methods"""
        for func in self.article_f:
            self.assertIsNot(func[1].__doc__, None,
                             "{:s} method needs a docstring".format(func[0]))
            self.assertTrue(len(func[1].__doc__) >= 1,
                            "{:s} method needs a docstring".format(func[0]))


class TestArticle(unittest.TestCase):
    """Test the Article class"""

    def setUp(self):
        """Set up method which runs before all the tests"""

        self.test_article = Article(title='article_example',
                                    content='content')
        models.storage.new(self.test_article)
        models.storage.save()

        self.article_json = self.test_article.to_dict()
        self.article_json['password'] = 'testpassword'
        self.article_json['id'] = '123-456-789'
        self.article_with_kwargs = Article(**self.article_json)
        models.storage.new(self.article_with_kwargs)
        models.storage.save()

    def tearDown(self):
        """tear down method which runs after all the tests"""

        try:
            models.storage.delete(self.test_article)
            models.storage.delete(self.article_with_kwargs)
            models.storage.save()
        except Exception as e:
            try:
                del self.model
                del self.article_with_kwargs

            except Exception as e:
                pass

    def test_test(self):
        """mock test to test setUp and teardown"""
        self.assertEqual(12, 12)

    def test_str(self):
        """test string representation"""
        self.assertEqual(self.test_article.title, "article_example")
        self.test_article.my_number = 89
        models.storage.save()
        self.assertEqual(self.test_article.my_number, 89)
        self.assertEqual(str(self.test_article), "[Article] ({}) {}".format(
            self.test_article.id, self.test_article.__dict__))

    def test_types(self):
        """test everything's type"""
        self.assertIsInstance(self.test_article, BaseModel)
        self.assertIsInstance(self.test_article, Article)
        self.assertTrue(issubclass(Article, BaseModel))

        self.assertIsInstance(self.test_article.created_at, datetime)
        self.assertIsInstance(self.test_article.updated_at, datetime)

        self.assertIsInstance(self.article_json, dict)
        self.assertIsInstance(self.article_json['created_at'], str)
        self.assertIsInstance(self.article_json['updated_at'], str)
        self.assertIsInstance(self.article_json['__class__'], str)
        self.assertIsInstance(self.article_json['title'], str)
        self.assertIsInstance(self.article_json['content'], str)
        self.assertIsInstance(self.test_article.id, str)
        self.assertIsInstance(self.test_article.img, str)

        self.assertTrue(hasattr(self.test_article, "title"))
        self.assertTrue(self.test_article.content == "content")

    def test_dictRepresentation(self):
        """test the to dict method"""
        self.test_article.id = 'fa5f7cec-e7e1-436f-ba49-35241277adac'
        self.test_article.title = 'last_name'
        self.test_article.author = 'Mohsen'

        self.article_json = self.test_article.to_dict()

        self.assertDictEqual(self.article_json, {
            '__class__': 'Article',
            'title': 'last_name',
            'updated_at': self.test_article.updated_at.isoformat()
            .replace('+00:00', ''),
            'created_at': self.test_article.created_at.isoformat()
            .replace('+00:00', ''),
            'id': self.test_article.id,
            'img': 'resources/default_article.png',
            'author': 'Mohsen',
            'content': 'content'
        })

    def test_save(self):
        """test the save method if it changes the updated at"""
        up_at1 = self.test_article.updated_at
        self.test_article.save()
        self.assertNotEqual(up_at1, self.test_article.updated_at)

    def test_delete(self):
        """test the delete method if it deletes the article"""
        self.test_article2 = Article(title='article@example.com',
                                     content='password')
        models.storage.new(self.test_article2)
        models.storage.save()

        self.assertIsNotNone(models.storage.get(
            Article, self.test_article2.id))

        models.storage.delete(self.test_article2)
        models.storage.save()

        self.assertIsNone(models.storage.get(Article, self.test_article2))

    def test_default_author(self):
        """Test that the author defaults to 'anonymous' if not provided"""
        self.assertEqual(self.test_article.author, 'anonymous')

    def test_custom_img_and_author(self):
        """Test that custom img and author values are saved correctly"""
        custom_img = b'custom image content'
        article = Article(title='custom article', content='custom content',
                          img=custom_img, author='custom author')
        models.storage.new(article)
        models.storage.save()
        self.assertEqual(article.img, custom_img)
        self.assertEqual(article.author, 'custom author')

        models.storage.delete(article)
        models.storage.save()
