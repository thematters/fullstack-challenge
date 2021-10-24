# Full-stack Engineer Code Challenge

Please write a simple website with the below features.

In order to make the process shorter, we've provided template and config examples in [`client`](./client) and [`server`](./server), and feel free to refactor them and use your favorite tools and packages.

## Required features

1. UI that can render list of stored articles.
2. UI for user to submit an article with title and text.
3. After the user submit, store the article and display notification stating the request is successful or failed.

## Bonus features

1. Generate (or redirect to) an URL for the article.
2. Pagination of article list.

## Recommended stack:

- language: TypeScript
- frontend: React
- data fetching: GraphQL
- server: Node.js
- storage: IPFS (static), OrbitDB (dynamic)

Note: although using IPFS/OrbitDB on frontend and omit server would be easier, please treat IPFS as an external service, and connect to it via a data fetching layer.
