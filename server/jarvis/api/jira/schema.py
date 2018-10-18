from graphene import String, ObjectType


class Ticket(ObjectType):
    id = String()
    summary = String()
    description = String()
