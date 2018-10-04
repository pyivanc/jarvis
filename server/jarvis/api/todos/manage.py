from jarvis import db
from .models import Todo


def seed_db():
    db.session.add(Todo(
        title='Clean the dishes',
        description='I need to clean my dishes'
    ))
