export function getTodos() {
    const query = {
        query: `{
            allTodos {
                edges {
                    node {
                        title,
                        description,
                        createdAt,
                        isDone
                    }
                }
            }
        }`
    };
    return fetch('http://localhost:5000/graphql?', {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    })
    .then(async res => {
        const result = await res.json();
        return result.data.allTodos.edges.map(edge => edge.node);
    });
}