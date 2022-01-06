# Full-stack Engineer Code Challenge

Please write a simple website with the below features, and include enough comments to demonstrate your design.

In order to make the process shorter, we've provided template and config exmaples in [`client`](./client) and [`server`](./server), and feel free to refactor them and use your favorite tools and packages.

## Required features

1. UI for the user to sign-in with Ethereum, via standard wallet such as MetaMask. 
2. UI that can render list of stored articles, displaying author's address.
3. UI for user to submit an article with title and text.
4. After the user submit, store the article and display notification stating the reuqest is successful or failed.

## Bouns features

1. Generate (or redirect to) an URL for the article.
2. Pagnation of article list.

## Recommended stack:

- language: TypeScript
- frontend: React
- data fetching: GraphQL
- server: Node.js
- storage: IPFS (static), OrbitDB (dynamic)

Note: although using IPFS/OrbitDB on frontend and omit server would be easier, please treat IPFS as an external service, and connect to it via a data fetching layer.
