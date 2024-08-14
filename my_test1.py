#!/usr/bin/python3

from models.base_model import BaseModel
from models.article import Article
from models import storage

article = '''
Here's how to reset your brain's dopamine levels and focus better than 97% of people:

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

Unleash your unlimited potential with "The Path to Recovery from Porn and Masturbation Addiction" and change your world!'''

new_article = Article(
    title='cheap dopamine is the ticket to depression', content=article)

storage.new(new_article)
storage.save()
storage.reload()

print(storage.get(Article, new_article.id))

print(new_article.title)
print(new_article.id)
print(new_article.created_at)
