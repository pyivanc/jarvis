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


export async function addTodo() {
  const query = {
    query: `
      mutation {
        addTodo {
          todo {
            id
          }
        }
      }
    `
  };
  await fetchGraphQL(query);
}

export async function deleteTodo(todoId) {
  const query = {
    query: `
      mutation {
        deleteTodo(todoId: ${todoId}) {
          todo {
            id
          }
        }
      }
    `
  };
  await fetchGraphQL(query);
}


export async function updateTodo(todoId, input) {
  const jsonInput = JSON.stringify(input).replace(/\"([^(\")"]+)\":/g,"$1:");
  const query = {
    query: `
      ${todoFragment}
      mutation {
        updateTodo(todoId: ${todoId}, input: ${jsonInput}) {
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
  const jsonInput = JSON.stringify(input).replace(/\"([^(\")"]+)\":/g,"$1:");
  const query = {
      query: `
        ${todoFragment}
        mutation {
          updateTodoItem(todoId: ${todoId}, todoItemId: ${todoItemId}, input: ${jsonInput}) {
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

export async function addTodoItem(todoId) {

  const query = {
      query: `
        ${todoFragment}
        mutation {
          addTodoItem(todoId: ${todoId}) {
            todo {
              ...todoFields
            }
          }
        }
      `
  };
  const res = await fetchGraphQL(query);
  return res.data.addTodoItem.todo;
}

export async function deleteTodoItem(todoId, todoItemId) {

  const query = {
      query: `
        ${todoFragment}
        mutation {
          deleteTodoItem(todoId: ${todoId}, todoItemId: ${todoItemId}) {
            todo {
              ...todoFields
            }
          }
        }
      `
  };
  const res = await fetchGraphQL(query);
  return res.data.deleteTodoItem.todo;
}