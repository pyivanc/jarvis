from .todos import manage as manage_todos


def deploy():
    manage_todos.deploy()
