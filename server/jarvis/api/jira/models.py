from jira import JIRA
"""
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

class Ticket():

    @classmethod
    def get_by_id(cls, id):
        app.logger.info(id)
        return jira.issue(id)
