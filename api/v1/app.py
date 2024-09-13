#!/usr/bin/python3
from models import storage
from flask import Flask, make_response, jsonify
from os import environ
from flask_cors import CORS
from api.v1 import create_app
from flasgger import Swagger
from flask_jwt_extended import JWTManager
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, set_access_cookies


def create_flask_app():
    appContext = Flask(__name__)
    appContext.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    #CORS(appContext, resources={r"/*": {"origins": "*"}})
    CORS(
        appContext,
        origins='http://142.93.38.10:5050',
        methods=['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        supports_credentials=True
    )

    # Change this to a strong secret key
    appContext.config['JWT_SECRET_KEY'] = environ.get(
        'MELILUS_API_SECRET_KEY', 'change_this_on_server_and_save_it_in_env')

    appContext.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

    jwt = JWTManager(appContext)
    appContext.config['SWAGGER'] = {
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

    Swagger(appContext)

    create_app(appContext)  # Register routes

    @appContext.teardown_appcontext
    def close_db(error):
        """ Close Storage """
        storage.close()

    @appContext.errorhandler(404)
    def not_found(error):
        """ 404 Error
        ---
        responses:
            404:
            description: a resource was not found
        """
        return make_response(jsonify({'error': error.description}), 404)

    @appContext.errorhandler(400)
    def custom400(error):
        ''' 400 Error
        ---
        responses:
            400:
            description: action couldn't be made
        '''
        return make_response(jsonify({'error': error.description}), 400)

    @appContext.errorhandler(401)
    def custom401(error):
        ''' 401 Error
        ---
        responses:
            401:
            description: Invalid credentials
        '''
        return make_response(jsonify({'error': error.description}), 401)

    @appContext.errorhandler(403)
    def custom403(error):
        ''' 403 Error
        ---
        responses:
            403:
            description: The request is not permitted
        '''
        return make_response(jsonify({'error': error.description}), 403)

    @appContext.errorhandler(500)
    def custom500(error):
        ''' 500 Error
        ---
        responses:
            500:
            description: internal server error (error with the backend code)
        '''
        return make_response(jsonify({'error': 'internal server error'}), 500)

        # Using an `after_request` callback, we refresh any token that is within 30
    # minutes of expiring. Change the timedeltas to match the needs of your application.
        '''
    @app.after_request
    def refresh_expiring_jwts(response):
        try:
            exp_timestamp = get_jwt()["exp"]
            now = datetime.now(timezone.utc)
            target_timestamp = datetime.timestamp(
                now + timedelta(minutes=30))
            if target_timestamp > exp_timestamp:
                access_token = create_access_token(
                    identity=get_jwt_identity())
                set_access_cookies(response, access_token)
            return response
        except (RuntimeError, KeyError):
            # Case where there is not a valid JWT. Just return the original response
            return response'''
    return appContext


app = create_flask_app()

if __name__ == '__main__':
    """ Main Function """
    host = environ.get('MELILUS_API_HOST')
    port = environ.get('MELILUS_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
        port = '5050'
    app.run(host=host, port=port, threaded=True)
