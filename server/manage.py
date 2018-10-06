from jarvis import create_app
from jarvis import db
from jarvis.api import manage


app = create_app()


@app.cli.command()
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@app.cli.command()
def seed_db():
    manage.seed_db()


@app.cli.command()
def deploy():
    pass
