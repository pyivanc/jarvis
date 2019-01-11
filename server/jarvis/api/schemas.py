import graphene
from .jira.schemas import Query as JiraQuery, Mutation as JiraMutation
from .todos.schemas import Query as TodoQuery, Mutation as TodoMutation


class JarvisQuery(TodoQuery, JiraQuery, graphene.ObjectType):
    pass


class JarvisMutation(TodoMutation, JiraMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=JarvisQuery, mutation=JarvisMutation)
