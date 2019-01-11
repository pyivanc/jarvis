import graphene
from .models import Ticket
from flask import current_app
import json


class TicketField(graphene.ObjectType):
    id = graphene.String()
    summary = graphene.String()
    description = graphene.String()


class Query(graphene.AbstractType):
    jira_ticket = graphene.Field(TicketField, ticket_id=graphene.String())

    def resolve_jira_ticket(self, *args, **kwargs):
        jira_ticket = Ticket.get_by_id(kwargs.get('ticket_id'))
        current_app.logger.info(dir(jira_ticket.fields))
        return TicketField(id=jira_ticket.id, summary=jira_ticket.fields.summary, description=jira_ticket.fields.description)


class Mutation(graphene.AbstractType):
    pass