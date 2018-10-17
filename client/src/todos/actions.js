import { fetchGraphQL } from '../utils';

export async function getTodos() {
    const query = {
        query: `
        {
            todoList {
              title,
              description,
              createdAt,
              isDone
              items {
                title
              }
            }
          }
        `
    };
    const res = await fetchGraphQL(query);
    return res.data;
}