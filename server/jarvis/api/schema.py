import graphene
from graphene import relay, List, String, Field
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from .todos.models import Todo as TodoModel
from .jira.schema import Ticket
from .jira.models import Ticket as TicketModel


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel
        interfaces = (relay.Node, )
    
    @classmethod
    def get_node(cls, info, id):
        return TodoModel.get_by_id(id)


class TodoConnection(relay.Connection):
    class Meta:
        node = Todo


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    # Disable sorting over this field
    all_todos = SQLAlchemyConnectionField(TodoConnection)
    todo = relay.Node.Field(Todo)
    # tickets = Field(Ticket, args={'id': String()})

    def resolve_tickets(self, info, id):
        return TicketModel.get_by_id(id)
    


schema = graphene.Schema(query=Query)