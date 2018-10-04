from flask.cli import FlaskGroup

from jarvis import create_app
from jarvis import db
from jarvis.api import manage


app = create_app()
cli = FlaskGroup(create_app=app)


@cli.command()
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@cli.command()
def seed_db():
    manage.seed_db()


@cli.command()
def deploy():
    pass


if __name__ == '__main__':
    cli()