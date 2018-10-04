from datetime import datetime

from flask import jsonify

from jarvis.api import api


@api.route('/todos')
def get_todos():
    return jsonify([
        {
            'title': 'Clean the dishes',
            'created_at': datetime.utcnow()
        }
    ])
