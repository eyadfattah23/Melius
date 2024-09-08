#!/usr/bin/python3
from models import storage
from flask import Flask, make_response, jsonify
from os import environ
from flask_cors import CORS
from api.v1 import create_app
from flasgger import Swagger
from flask_jwt_extended import JWTManager


def create_flask_app():
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

    # Change this to a strong secret key
    app.config['JWT_SECRET_KEY'] = environ.get(
        'MELILUS_API_SECRET_KEY', 'change_this_on_server_and_save_it_in_env')
    jwt = JWTManager(app)
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
        return make_response(jsonify({'error': error.description}), 404)

    @app.errorhandler(400)
    def custom400(error):
        ''' 400 Error
        ---
        responses:
            400:
            description: action couldn't be made
        '''
        return make_response(jsonify({'error': error.description}), 400)

    @app.errorhandler(401)
    def custom401(error):
        ''' 401 Error
        ---
        responses:
            401:
            description: Invalid credentials
        '''
        return make_response(jsonify({'error': error.description}), 401)

    @app.errorhandler(403)
    def custom403(error):
        ''' 403 Error
        ---
        responses:
            403:
            description: The request is not permitted
        '''
        return make_response(jsonify({'error': error.description}), 403)

    @app.errorhandler(500)
    def custom500(error):
        ''' 500 Error
        ---
        responses:
            500:
            description: internal server error (error with the backend code)
        '''
        return make_response(jsonify({'error': 'internal server error'}), 500)

    return app


if __name__ == '__main__':
    """ Main Function """
    app = create_flask_app()
    host = environ.get('MELILUS_API_HOST')
    port = environ.get('MELILUS_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5050'
    app.run(host=host, port=port, threaded=True)
