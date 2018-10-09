import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from .todos.models import Todo as TodoModel


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel
        interfaces = (relay.Node, )


class TodoConnection(relay.Connection):
    class Meta:
        node = Todo


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    # Disable sorting over this field
    all_todos = SQLAlchemyConnectionField(TodoConnection)

schema = graphene.Schema(query=Query)