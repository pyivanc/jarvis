from jira import JIRA

from flask import jsonify

from jarvis.api import api

JIRA_OPTIONS = {
    'server': 'https://jira.hootsuitemedia.com',
    'basic_auth': ('', '')
}

jira = JIRA(JIRA_OPTIONS)

@api.route('/jira/tickets/<string:ticket_id>')
def get_tickets(ticket_id):
    return jsonify(jira.issue(ticket_id))
