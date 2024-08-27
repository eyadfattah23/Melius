#!/usr/bin/python3
"""This module defines a class TimerHistory
which is responsible for the clock of each user"""
from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, ForeignKey, DateTime, Integer
from sqlalchemy.orm import relationship
from hashlib import md5
from datetime import datetime


class TimerHistory(BaseModel, Base):
    """Class representation of the timer_histories table
    in the database using sqlalchemy orm

    obligatory attributes:
    1. user_id
    """
    __tablename__ = 'timer_histories'

    user_id = Column(String(60), ForeignKey(
        'users.id'), nullable=False, unique=True)

    start_date = Column(DateTime, nullable=False)
    reset_date = Column(DateTime, nullable=True)

    no_tries = Column(Integer, nullable=False, default=0)
    # incremented each time he/she resets

    max_time = Column(Integer, nullable=True, default=0)

    def __init__(self, *args, **kwargs):
        """initializes timer for a user when a start request is sent"""
        self.start_date = datetime.utcnow()
        super().__init__(*args, **kwargs)
