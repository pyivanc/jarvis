from flask import Flask
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    db.init_app(app)

    # register blueprints
    from jarvis.api import api as api_bp
    app.register_blueprint(api_bp)

    return app
