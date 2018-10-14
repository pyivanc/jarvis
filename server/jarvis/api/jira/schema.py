import graphene
from graphene import String, ObjectType
from jira import JIRA


class Ticket(ObjectType):
    id = String()
    summary = String()
    description = String()
