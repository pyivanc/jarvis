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


class AddTodo(graphene.Mutation):
    todo = graphene.Field(Todo)

    def mutate(self, info):
        todo = TodoModel.add()
        return AddTodo(todo=todo)


class DeleteTodo(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()

    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id):
        todo = TodoModel.delete(todo_id)
        return DeleteTodo(todo=todo)


class UpdateTodo(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
        input = graphene.Argument(UpdateTodoInput)
    
    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id, input):
        todo = TodoModel.update_todo(todo_id, input)
        return UpdateTodo(todo=todo)


class UpdateTodoItem(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
        todo_item_id = graphene.Int()
        input = graphene.Argument(UpdateTodoItemInput)
    
    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id, todo_item_id, input):
        todo = TodoModel.update_todo_item(todo_id, todo_item_id, input)
        return UpdateTodoItem(todo=todo)


class DeleteTodoItem(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
        todo_item_id = graphene.Int()
    
    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id, todo_item_id):
        todo = TodoModel.delete_todo_item(todo_id, todo_item_id)
        return DeleteTodoItem(todo=todo)


class AddTodoItem(graphene.Mutation):
    class Arguments:
        todo_id = graphene.Int()
    
    todo = graphene.Field(Todo)

    def mutate(self, info, todo_id):
        todo = TodoModel.add_todo_item(todo_id)
        return AddTodoItem(todo=todo)