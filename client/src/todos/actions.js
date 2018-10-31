import { fetchGraphQL } from '../utils';

const todoFragment = `
  fragment todoFields on Todo {
    id,
    title,
    description,
    createdAt,
    isDone
    items {
      id,
      title,
      isDone
    }
  }
`;

export async function getTodos() {
    const query = {
        query: `
        ${todoFragment}

        {
            todoList {
              ...todoFields
            }
          }
        `
    };
    const res = await fetchGraphQL(query);
    return res.data.todoList;
}

export async function toggleTodo(todoId) {
  const query = {
      query: `
        ${todoFragment}
        mutation {
          toggleTodo(todoId: ${todoId}) {
            todo {
              ...todoFields
            }
          }
        }
      `
  };
  const res = await fetchGraphQL(query);
  return res.data.toggleTodo.todo;
}

export async function toggleTodoItem(todoId, todoItemId) {
  const query = {
      query: `
        ${todoFragment}
        mutation {
          toggleTodoItem(todoId: ${todoId}, todoItemId: ${todoItemId}) {
            todo {
              ...todoFields
            }
          }
        }
      `
  };
  const res = await fetchGraphQL(query);
  return res.data.toggleTodoItem.todo;
}