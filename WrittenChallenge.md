# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demonstrate your thoughts.

You can directly write your answers in your branch following the questions.

## Section 1: Architectural Design

_Please answer at lease one of the following questions._

- Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and evolving the infrastructures?

- Assume that you are building a backend service for a medical company. When a request come in, this service needs to take the user input, pass it to a pre-trained computational model, and return the output to the user. The service needs to handle a high request frequency with uncertain average traffic volume, and the computational model needs to process large amount of data in parallel. How would you design this service and choose the building blocks to achieve the above requirements?

- Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?

```language
首先可以在資料庫前架設一個Redis當作快取以改善讀取速度。再來要scale up資料庫時，我會先選擇垂直擴展，在資料庫中增加CPU、記憶體和硬碟，因為實作和維護的成本較低，但單一伺服器會有極限，超過一定的規格後設備的成本也會開始相對不划算，且有討論說PostgreSQL最多只能擴展至64核心，因此成長到一定水準之後還是會需要水平擴展，可以讓主要的伺服器將改變寫入WAL檔案，以非同步的方式更新到其他的PostgreSQL伺服器。
```

## Section 2: Distributed Systems and Web3

_Please answer at lease one of the following questions._

- Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized, so that it is not easier censored, that the network cannot be brought down by single point of failure, and that other developers can build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

- Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and technological challenges you forsee, and what do you think it takes to solve these problems well?

```language
NFT有一個問題是盜版，創作者的作品有可能會被別人複製並製作為NFT出售。因此我的想法是可以在創造NFT的過程中加入驗證機制。
```

## Section 3: Personal Passions and Communities

_Please answer at lease two of the following questions._

- What are some technologies you are recently fascinated with, and why are they interesting to you?

```language
最近在學的技術是Next.js，主要吸引我的地方是，它提供了一個簡單的方法來實作SSR，同時又有優化SEO。
```

- What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

```language
之前有考慮要參與的是均一的軟體志工計畫，主要吸引我的地方是能夠用我的專業能力為社會做出一點貢獻，幫助別人的感覺。
```

- If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collaboration process?
