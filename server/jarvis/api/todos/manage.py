from jarvis import db
from .models import Todo, TodoItem


def deploy():
    todo = Todo(
        title='Prepare party',
        description='List of things to do'
    )
    todo.items.append(TodoItem(title='Clean carpet'))
    todo.items.append(TodoItem(title='Wash dishes'))
    db.session.add(todo)
    db.session.commit()
