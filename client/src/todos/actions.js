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

export async function updateTodo(todoId, input) {
  const query = {
    query: `
      ${todoFragment}
      mutation {
        updateTodo(todoId: ${todoId}, input: ${input}) {
          todo {
            ...todoFields
          }
        }
      }
    `
  };
  const res = await fetchGraphQL(query);
  return res.data.updateTodo.todo;
}

export async function updateTodoItem(todoId, todoItemId, input) {
  const query = {
      query: `
        ${todoFragment}
        mutation {
          updateTodoItem(todoId: ${todoId}, todoItemId: ${todoItemId}, input: ${input}) {
            todo {
              ...todoFields
            }
          }
        }
      `
  };
  const res = await fetchGraphQL(query);
  return res.data.updateTodoItem.todo;
}