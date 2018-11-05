import graphene
from graphene import List, Field
from .todos.schemas import Todo, TodoItem, UpdateTodo, UpdateTodoItem, DeleteTodoItem, AddTodoItem, AddTodo, DeleteTodo
from .todos.models import Todo as TodoModel, TodoItem as TodoItemModel
from jarvis import db


class Query(graphene.ObjectType):
    todo = Field(Todo)
    todo_list = List(Todo)
    todo_item = Field(TodoItem)
    todo_item_list = List(TodoItem)

    def resolve_todo(self, *args, **kwargs):
        return db.session.query(TodoModel).first()

    def resolve_todo_list(self, *args, **kwargs):
        return db.session.query(TodoModel).all()

    def resolve_todo_item(self, *args, **kwargs):
        return db.session.query(TodoItemModel).first()
    
    def resolve_todo_item_list(self, *args, **kwargs):
        return db.session.query(TodoItemModel).all()


class Mutations(graphene.ObjectType):
    update_todo      = UpdateTodo.Field()
    add_todo         = AddTodo.Field()
    delete_todo      = DeleteTodo.Field()
    add_todo_item    = AddTodoItem.Field()
    update_todo_item = UpdateTodoItem.Field()
    delete_todo_item = DeleteTodoItem.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)
