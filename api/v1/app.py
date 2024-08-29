from flask import Flask
from models.engine.db_storage_engine import db
from os import environ
from api.v1 import create_app

def create_flask_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    db.init_app(app)

    create_app(app)  # Register routes

    return app

if __name__ == '__main__':
    """ Main Function """
    app = create_flask_app()
    host = environ.get('HBNB_API_HOST')
    port = environ.get('HBNB_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5000'
    app.run(host=host, port=port, threaded=True)