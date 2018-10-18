"""
from jira import JIRA

JIRA_OPTIONS = {
    'server': app.config['JIRA_HOST'],
}


jira = JIRA(
    JIRA_OPTIONS,
    basic_auth=(
        app.config['JIRA_USERNAME'],
        app.config['JIRA_PASSWORD']
    )
)
"""

jira = None


class Ticket(object):

    @classmethod
    def get_by_id(cls, ticket_id):
        return jira.issue(ticket_id)
