import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_graphql import GraphQLView


db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

    # set config
    app_settings = os.getenv('APP_SETTINGS')
    app.config.from_object(app_settings)

    db.init_app(app)
    migrate.init_app(app, db)

    # register blueprints
    from jarvis.api import api as api_bp, schema
    app.register_blueprint(api_bp)

    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema.schema, graphiql=True))

    return app
