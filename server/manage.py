from flask_migrate import upgrade

from jarvis import create_app
from jarvis import db
from jarvis.api import manage as api_manage


app = create_app()


@app.cli.command()
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@app.cli.command()
def deploy():
    upgrade()
    api_manage.deploy()
