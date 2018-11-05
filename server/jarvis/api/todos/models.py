from datetime import datetime
from flask import current_app

from jarvis import db


class TodoItem(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), default='')
    description = db.Column(db.String, default='')
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
    todo_id = db.Column(db.Integer, db.ForeignKey('todo.id'))

    @classmethod
    def get_by_id(cls, todo_item_id):
        return TodoItem.query.get(todo_item_id)


class Todo(db.Model):

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255), default='')
    description = db.Column(db.String, default='')
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
    def add(cls):
        todo = Todo()
        db.session.add(todo)
        db.session.commit()
        return todo

    @classmethod
    def delete(cls, todo_id):
        todo = Todo.get_by_id(todo_id)
        if todo:
            current_app.logger.info(todo)
            db.session.delete(todo)
            db.session.commit()
        return todo

    @classmethod
    def get_todo_item_by_id(cls, todo_id, todo_item_id):
        todo = Todo.get_by_id(todo_id)
        todo_item = None
        if todo:
            todo_item = todo.items.filter_by(id=todo_item_id).first()
        return todo_item

    @classmethod
    def update_todo(cls, todo_id, data):
        todo = Todo.get_by_id(todo_id)
        if todo:
            for key, value in data.__dict__.items():
                if value is not None:
                    setattr(todo, key, value)
            db.session.commit()
        return todo
    
    @classmethod
    def update_todo_item(cls, todo_id, todo_item_id, data):
        todo_item = Todo.get_todo_item_by_id(todo_id, todo_item_id)
        if todo_item:
            for key, value in data.__dict__.items():
                if value is not None:
                    setattr(todo_item, key, value)
            db.session.commit()
        return todo_item

    @classmethod
    def add_todo_item(cls, todo_id):
        todo = Todo.get_by_id(todo_id)
        if todo:
            todo_item = TodoItem()
            todo.items.append(todo_item)
            db.session.commit()
        return todo

    @classmethod
    def delete_todo_item(cls, todo_id, todo_item_id):
        todo_item = Todo.get_todo_item_by_id(todo_id, todo_item_id)
        if todo_item:
            db.session.delete(todo_item)
            db.session.commit()
        return todo_item