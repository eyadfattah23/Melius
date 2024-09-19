<<<<<<< HEAD
<<<<<<< HEAD
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

=======
#!/usr/bin/python3
from models import storage
from flask import Flask,make_response, jsonify
=======
#!/usr/bin/python3
from models import storage
from flask import Flask, make_response, jsonify
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
from os import environ
from flask_cors import CORS
from api.v1 import create_app
from flasgger import Swagger

<<<<<<< HEAD
=======

>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
def create_flask_app():
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
    app.config['SWAGGER'] = {
<<<<<<< HEAD
        'title': 'Melius API', 
=======
        'title': 'Melius API',
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
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
<<<<<<< HEAD
    ],
=======
        ],
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
    }

    Swagger(app)

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
    create_app(app)  # Register routes
=======
    @app.errorhandler(400)
    def custom400(error):
        response = make_response(
            jsonify({'error': error.description}), 400)
        return response

>>>>>>> baf9030... fix scoping error
=======
>>>>>>> 331f2e5... handle error 400
=======
    create_app(app)  # Register routes

>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
    @app.teardown_appcontext
    def close_db(error):
        """ Close Storage """
        storage.close()

<<<<<<< HEAD

=======
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
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

    @app.errorhandler(401)
    def custom401(error):
        ''' 401 Error
        ---
        responses:
            401:
            description: Invalid credentials
        '''
        return make_response(jsonify({'error': error.description}), 401)

    return app


<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d4ea94c... modified the app api
=======
>>>>>>> baf9030... fix scoping error
=======
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
if __name__ == '__main__':
    """ Main Function """
    app = create_flask_app()
    host = environ.get('HBNB_API_HOST')
    port = environ.get('HBNB_API_PORT')
    if not host:
        host = '0.0.0.0'
    if not port:
<<<<<<< HEAD
        port = '5000'
<<<<<<< HEAD
    app.run(host=host, port=port, threaded=True)
=======
    app.run(host=host, port=port, threaded=True)
>>>>>>> d4ea94c... modified the app api
=======
        port = '5050'
    app.run(host=host, port=port, threaded=True)
>>>>>>> bc0557dfcd15fe73772b646548b7ad930bfec2fc
