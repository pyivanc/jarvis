const SERVER_URL = 'http://localhost:5000'

export function fetchGraphQL(query) {
    return fetch(`${SERVER_URL}/graphql?`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(query)
    })
    .then(async res => await res.json());
}