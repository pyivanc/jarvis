from jarvis import db
from graphene_sqlalchemy import SQLAlchemyObjectType
from .models import Todo as TodoModel, TodoItem as TodoItemModel
import graphene


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel


class TodoItem(SQLAlchemyObjectType):
    class Meta:
        model = TodoItemModel


class ToggleTodo(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()

    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id):
        todo = TodoModel.toggle_todo(todo_id)
        return ToggleTodo(todo=todo)

class ToggleTodoItem(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
        todo_item_id = graphene.Int()

    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id, todo_item_id):
        todo = TodoModel.toggle_todo_item(todo_id, todo_item_id)
        return ToggleTodo(todo=todo)

