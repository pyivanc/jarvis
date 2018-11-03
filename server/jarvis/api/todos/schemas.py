from graphene_sqlalchemy import SQLAlchemyObjectType
import graphene
from flask import current_app

from jarvis import db
from .models import Todo as TodoModel, TodoItem as TodoItemModel


class Todo(SQLAlchemyObjectType):
    class Meta:
        model = TodoModel


class TodoItem(SQLAlchemyObjectType):
    class Meta:
        model = TodoItemModel


class TodoInput(object):
    title = graphene.String()
    description = graphene.String()
    is_done = graphene.Boolean()


class UpdateTodoInput(graphene.InputObjectType, TodoInput):
    pass


class UpdateTodoItemInput(graphene.InputObjectType, TodoInput):
    pass
    

class UpdateTodo(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
        input = graphene.Argument(UpdateTodoInput)
    
    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id, input):
        todo = TodoModel.update_todo(todo_id, input)
        return UpdateTodo(todo=todo)