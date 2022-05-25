# Full-stack Engineer Written Challenge

Please answer one or more questions on Section 1 and Section 2, and two or more questions in Section 3. There are no word limits on the answers; you can keep them as concise as possible as long as you have demostrate your thoughts. 

You can directly write your answers in your branch following the questions. 

## Section 1: Architectural Design

*Please answer at lease one of the following questions.*

* Assume that you are building a discussion forum similar with [Hacker News](https://news.ycombinator.com/). The product will be very popular, and your team made the following projection: monthly traffic of 30k page views and 5k posts in the first year, and monthly traffic of 300m page views and 500k posts in the second year. How would you choose your frontend and backend technologies, infrastructures and deploying methods? What methods will you use in scaling your platform and envovling the infrastructures?

Answer: May need CDN for hosting static page to reduce backend load. In my previous work, we just use AWS services for the product, except the database. The database we used is Mongodb due to the type of data stored.


## Section 2: Distributed Systems and Web3

*Please answer at least one of the following questions.*

* Assume you are to design a product supporting a social network, which allows users to publish articles, comment on articles, and follow other users' articles and comments. You also want this social network to be decentralized and scalable, while enabling other developers to build different tools for the network. What technologies and product would be the essential building blocks, what roles would they play, and how would you combine them together?

Answer: Suppose we can store all the data(can be optimized anyway;) onchain despite the costs, then we can create a client that can be hosted locally whether it’s a website or an app.  


## Section 3: Personal Passions and Communities

*Please answer at least two of the following questions.*


* What are some open source projects that you are involved with, or enjoy working on? What aspect of the project (e.g. architectural design, scope, community vibe, organization) makes it enjoyable or admirable?

Answer: For me currently is BanklessDAO, because 
**TL;DR: The vide and architecture design**
- The dev guild vibe (open, inclusive, fun) 
- You know there's always someone to help you out whenever you meet some dev issues. They'll provide some help to guide you through if you really want to help, even you're a newbie developer. 
- Also the people too, they are experienced programmers, 
- There's always discussion about the entrance of the dev guild: is it inclusive enough or does it require the new comers to compete with each other(back to the traditional orgs job seeking process)?

------

* If you were given the resource and freedom to start and maintain an open source project, what problem do you choose to solve, and how would you setup the community guideline and collabration process?

Answer: The first thing I want to solve is to let developers know "how this project could help", to make the onboarding of this project as smooth as possible, including:
1. Create different kinds of tutorials of getting started, blogs, videos etc. Also can host tech workshops, hackathons in real life.
2. Create live demos with different use cases.
3. Create detailed docummentation and a discord/forums for support and discussions.        



