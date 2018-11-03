from datetime import datetime
from flask import current_app

from jarvis import db


class TodoItem(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
    todo_id = db.Column(db.Integer, db.ForeignKey('todo.id'))

    @classmethod
    def get_by_id(cls, todo_item_id):
        return TodoItem.query.get(todo_item_id)


class Todo(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
    items = db.relationship('TodoItem',
        backref=db.backref('todo'),
        lazy='dynamic',
        order_by=TodoItem.id
    )

    @classmethod
    def get_by_id(cls, todo_id):
        return Todo.query.get(todo_id)

    @classmethod
    def get_all(cls):
        return Todo.query.all()

    @classmethod
    def toggle_todo(cls, todo_id):
        todo = Todo.get_by_id(todo_id)
        if todo:
            todo.is_done = not todo.is_done
        db.session.commit()
        return todo

    @classmethod
    def toggle_todo_item(cls, todo_id, todo_item_id):
        todo = Todo.get_by_id(todo_id)
        if todo:
            todo_item = todo.items.filter_by(id=todo_item_id).first()
            if todo_item:
                todo_item.is_done = not todo_item.is_done
                db.session.commit()
        return todo

    @classmethod
    def update_todo(cls, todo_id, data):
        todo = Todo.get_by_id(todo_id)
        if todo:
            for key, value in data.__dict__.items():
                if value is not None:
                    setattr(todo, key, value)
            db.session.commit()
        return todo