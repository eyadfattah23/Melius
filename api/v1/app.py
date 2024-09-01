#!/usr/bin/python3
from models import storage
from flask import Flask, make_response, jsonify
from os import environ
from flask_cors import CORS
from api.v1 import create_app
from flasgger import Swagger


def create_flask_app():
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
    app.config['SWAGGER'] = {
        'title': 'Melius API',
        'description': 'API for Melius a web app that will help you beat porn addiction in complete secrecy',
        'schemes': ['http', 'https'],
        'version': '1.0',
        'termsOfService': 'http://www.me.com/terms',
        'specs_route': '/apidocs/',
        'tags': [
            {
                'name': 'user',
                'description': 'Operations about user'
            },
            {
                'name': 'post',
                'description': 'Operations about post'
            },
            {
                'name': 'article',
                'description': 'Operations about article'
            },
            {
                'name': 'comment',
                'description': 'Operations about comment'
            },
        ],
    }

    Swagger(app)

    create_app(app)  # Register routes

    @app.teardown_appcontext
    def close_db(error):
        """ Close Storage """
        storage.close()

    @app.errorhandler(404)
    def not_found(error):
        """ 404 Error
        ---
        responses:
            404:
            description: a resource was not found
        """
        return make_response(jsonify({'error': "Not found"}), 404)

    @app.errorhandler(400)
    def custom400(error):
        ''' 400 Error
        ---
        responses:
            400:
            description: action couldn't be made
        '''
        return make_response(jsonify({'error': error.description}), 400)

    return app


if __name__ == '__main__':
    """ Main Function """
    app = create_flask_app()
    host = environ.get('HBNB_API_HOST')
    port = environ.get('HBNB_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5050'
    app.run(host=host, port=port, threaded=True)
