from datetime import datetime
from jarvis import db


class TodoItem(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
    todo_id = db.Column(db.Integer, db.ForeignKey('todo.id'))


class Todo(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
    items = db.relationship('TodoItem', backref=db.backref('todo'))

    @classmethod
    def get_by_id(cls, todo_id):
        return Todo.query.get(todo_id)

    @classmethod
    def get_all(cls):
        return Todo.query.all()
