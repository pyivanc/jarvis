from jira import JIRA
from flask import current_app

JIRA_OPTIONS = {
    'server': 'https://jira.hootsuitemedia.com',
}

# jira = JIRA(JIRA_OPTIONS, basic_auth=('ivan.company', 'Reclutador69Wifi'))

class Ticket():

    @classmethod
    def get_by_id(cls, id):
        current_app.logger.info(id)
        return jira.issue(id)
