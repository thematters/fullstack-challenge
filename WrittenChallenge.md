# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts. 

You can directly write your answers in your branch following the questions. 

## Section 1: Architectural Design

*Please answer at lease one of the following questions.*

* Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and envovling the infrastructures?

```markdown
  * At the first year:
    * Frontend: I will choose the Vanilla JS, normalize.css to build the frontend. I will host them on AWS S3 like service and will have a CDN for static file requests.
    * Backend: I will choose nodejs to deal with business logic and host it on an AWS Lambda-like service, then use Redis service for cache and use an rds service to store data.
    * Deploying method: Gitlab.

  * At the second year:
    * Add a server-side render service to decrease some requests from outside the system for backend API. It also can do at the first year.
    * Split the backend API by reading or write, deploy them to different clusters.
    * Add a CDN in front of the query api cluster for cache those API result.
    * Create a different store in the rdb service by month and the write api should follow a rule to access rdb service to make sure the rdb least locked by write.
    * Those service I use all have corresponding service on AWS and those setting sure be prepare for traffic.
```

* Assume that you are building a backend service for a medical company. When a request come in, this service needs to take the user input, pass it to a pre-trained computational model, and return the output to the user. The service needs to handle a high request frequency with uncertian average traffic volumne, and the computational model needs to process large amount of data in parallel. How would you design this service and choose the building blocks to achieve the above requirements?

```markdown
  I am not sure about the pre-trained computational, will it change during the full process?
  I will build three parts for this, the first part is a cache that maps input to out.
  The second part is a queue module but it will use the input to search in the first part cache, if it hit, return the output, if not it will add user input into a queue.
  Also, it can have multiple queues and using load balance to share user input.
  The third part is the computational modal management and it can be set to have multiple computational modal instances.
  It will ask the second part for the user input and give the input to a model, and waiting for the model to finish its work then it will collect the model result and update the first part.
  The first part can be a Redis server and the second part can be a cluster combined by load balance server and queue servers, the third part can be a cluster combined by a load balance server and computational servers.
```

* Assume that you have an application that is growing very fast. It uses PostgreSQL as data storage, and the growing traffic is making write and read operations slow. What strategies would you take to scale your database horizontally and vertically?

```markdown
  First I will vertically scalar the database and horizontally scalar each table in each separated databases.
```


## Section 2: Distributed Systems and Web3

*Please answer at lease one of the following questions.*

* Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized, so that it is not easilier censored, that the network cannot be brought down by single point of failure, and that other developers can build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

* Assume you are to design a product for crowdfunding creative projects with NFTs, where the creator pre-sale the ownership of the final result as NFTs. From minting the tokens to delivering the final result, what are the UX and techonogical challenges you forsee, and what do you think it takes to solve these problems well?


## Section 3: Personal Passions and Communities

*Please answer at lease two of the following questions.*

* What are some technologies you are recently fascinated with, and why are they interesting to you?

```markdown
  OrbitDB and IFPS.
  Due to this challenge, I found that those technologies can give the front-end more capability and can be more like independent applications.(I am a frontend engineer now)
```

* What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

```markdown
  I just make some personal projects for improving my skill.
  I made a selection library to use CSS select syntax to get data from js objects when I was a junior frontend.
  Because of the project, I spent time learning deeper CSS select syntax and I am more familiar with tree.
  In the end, I post it on Facebook and get some likes and my skill improved as well.
  Although It is not very useful now I think, it seems it costs too much performance than the direct operation js data.
```

* If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?


