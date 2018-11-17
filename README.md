# matters-fullstack-challenge

Please write a simple website with the given features. The participant should clone this repo, and submit to a new branch with the participant's name.

There are 3 versions of this chanllenge, with increasing difficulty. The participant only need to choose one version.

---

## V1

1. UI for user to enter and submit text.
2. Storage for the text input from user.
3. Generate (or redirect to) an URL for the input text.
4. Retrieve a piece of text for a given URL.

## V2

1. UI for user to enter and submit text.
2. After the user submit, timeout for 30 seconds, then store the user input.
3. Notify the user when timeout finishes, and display the text content in the notification.

## V3

1. UI for user to submit an article with title and text.
2. Storage the article from user.
3. When user submit an article, allow the user to choose from a list of titles if the user have submitted articles before, then store the choice as the upstrem of the article.
4. UI that can render the upstream/downstream tree structure of articles.

---

Recommended stack:

- language: typescript
- frontend: React
- data fetching: GraphQL
- server: Node.js
- storage: IPFS (static), OrbitDB (dynamic)

Note: although using IPFS/OrbitDB on frontend and omit server would be easier, please treat IPFS as an external service, and connect to it via a data fetching layer.
