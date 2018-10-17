export function fetchGraphQL(query) {
    return fetch(`${process.env.SERVER_URL}/graphql?`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    })
    .then(async res => await res.json());
}