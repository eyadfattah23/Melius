#!/usr/bin/python3
"""
initialize a storage object to manipulate the Database
"""

from models.engine.db_storage_engine import DBStorage
storage = DBStorage()
storage.reload()
