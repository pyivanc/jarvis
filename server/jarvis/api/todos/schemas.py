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


class Query(graphene.AbstractType):
    todo = graphene.Field(Todo)
    todo_list = graphene.List(Todo)
    todo_item = graphene.Field(TodoItem)
    todo_item_list = graphene.List(TodoItem)

    def resolve_todo(self, *args, **kwargs):
        return db.session.query(TodoModel).first()

    def resolve_todo_list(self, *args, **kwargs):
        return db.session.query(TodoModel).all()

    def resolve_todo_item(self, *args, **kwargs):
        return db.session.query(TodoItemModel).first()
    
    def resolve_todo_item_list(self, *args, **kwargs):
        return db.session.query(TodoItemModel).all()


class Mutation(graphene.AbstractType):
    update_todo      = UpdateTodo.Field()
    add_todo         = AddTodo.Field()
    delete_todo      = DeleteTodo.Field()
    add_todo_item    = AddTodoItem.Field()
    update_todo_item = UpdateTodoItem.Field()
    delete_todo_item = DeleteTodoItem.Field()