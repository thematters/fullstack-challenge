# Challenge approach by Michael Wang

## Starting

```sh
# install
npm run install:all

# start server at http://localhost:4000/
npm run start:server

# start client at http://localhost:8000
npm run start:client
```

# matters-fullstack-challenge

Please write a simple website with the given features. The participant should clone this repo, and submit to a new branch with the participant's name.

---

### Required features

1. UI that can render list of stored articles.
2. UI for user to submit an article with title and text.
3. After the user submit, store the article and display notification stating the reuqest is successful or failed.

### Bouns features

1. Generate (or redirect to) an URL for the article.
2. Pagnation of article list.

### Recommended stack

- language: TypeScript
- frontend: React
- data fetching: GraphQL
- server: Node.js
- storage: IPFS (static), OrbitDB (dynamic)

In order to make the process shorter, we've provided template and config exmaples in `client` and `server`, and feel free to refactor them and use your favorite tools and packages.

Note: although using IPFS/OrbitDB on frontend and omit server would be easier, please treat IPFS as an external service, and connect to it via a data fetching layer.
