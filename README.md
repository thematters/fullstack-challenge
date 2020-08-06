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

### Recommended stack:

- language: typescript
- frontend: React
- data fetching: GraphQL
- server: Node.js
- storage: IPFS (static), OrbitDB (dynamic)

Note: although using IPFS/OrbitDB on frontend and omit server would be easier, please treat IPFS as an external service, and connect to it via a data fetching layer.
