from datetime import datetime

from flask import jsonify, current_app

from jarvis.api import api
from .models import Todo


@api.route('/todos')
def get_todos():
    todos = Todo.query.all()
    result = [{'title': t.title, 'description': t.description} for t in todos]
    return jsonify(result)
