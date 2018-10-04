from .todos import manage as manage_todos


def seed_db():
    manage_todos.seed_db()