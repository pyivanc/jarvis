from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene import relay, String
from .models import Todo as TodoModel, TodoItem as TodoItemModel


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel
        interfaces = (relay.Node, )


class TodoItem(SQLAlchemyObjectType):
    class Meta:
        model = TodoItemModel
        interfaces = (relay.Node, )
