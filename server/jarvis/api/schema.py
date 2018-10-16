import graphene
from graphene import relay, List, String, Field
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from .todos.schemas import Todo, TodoItem
from .jira.schema import Ticket
from .jira.models import Ticket as TicketModel


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    todo = relay.Node.Field(Todo)
    todoList = SQLAlchemyConnectionField(Todo)
    todoItem = relay.Node.Field(TodoItem)
    todoItemList = SQLAlchemyConnectionField(TodoItem)

    # tickets = Field(Ticket, args={'id': String()})

    def resolve_tickets(self, info, id):
        return TicketModel.get_by_id(id)
    


schema = graphene.Schema(query=Query)