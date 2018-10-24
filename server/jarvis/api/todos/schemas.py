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
        todo = TodoModel.query.get(todo_id)
        if todo:
            todo.is_done = not todo.is_done
            db.session.commit()
        return ToggleTodo(todo=todo)
