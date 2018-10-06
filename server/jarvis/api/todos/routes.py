from datetime import datetime

from flask import jsonify

from jarvis.api import api
from .models import Todo


@api.route('/todos')
def get_todos():
    return jsonify([t.to_json() for t in Todo.query.all()])
