from jira import JIRA
from flask import current_app

class Ticket(object):

    jira = None

    @classmethod
    def get_instance(cls):
        if not cls.jira:
            JIRA_OPTIONS = {
                'server': current_app.config['JIRA_HOST'],
            }
            cls.jira = JIRA(
                JIRA_OPTIONS,
                basic_auth=(
                    current_app.config['JIRA_USERNAME'],
                    current_app.config['JIRA_PASSWORD']
                )
            )
        return cls.jira

    @classmethod
    def get_by_id(cls, ticket_id):
        return cls.get_instance().issue(ticket_id)
