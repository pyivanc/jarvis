import { fetchGraphQL } from '../utils';

export async function getTodos() {
    const query = {
        query: `
        {
            todoList {
              id,
              title,
              description,
              createdAt,
              isDone
              items {
                id,
                title
              }
            }
          }
        `
    };
    const res = await fetchGraphQL(query);
    return res.data.todoList;
}