from datetime import datetime
from jarvis import db


class Todo(db.Model):

    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(255))
    description = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.utcnow())
    is_done = db.Column(db.Boolean, default=False)
