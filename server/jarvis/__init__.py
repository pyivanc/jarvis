import os

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_graphql import GraphQLView

from jarvis.config import config


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    CORS(app)

    # set config
    config_name = os.getenv('APP_SETTINGS')
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)
    migrate.init_app(app, db)

    # register blueprints
    from jarvis.api import api as api_bp, schemas
    app.register_blueprint(api_bp)

    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schemas.schema, graphiql=True))

    return app
