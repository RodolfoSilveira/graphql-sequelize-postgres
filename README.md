# 🌐 Simple GraphQL User API

* What is this project?
  - A simple user API with GraphQL made to learn more about create APIs with GraphQL (*schemas, resolvers, typeDefs*) and connections to database.
  
* Why GraphQL?
  - Many sources of information cite GraphQL as a solution to solve REST(*most popular way to create APIS today*) problems. And everyone in programmers should test these technologies to talk about.
  
## 🎮 Queries, Mutations and results
* In this project I use GraphQL Yoga, he give to us the `Playground` a interface to test our APIs in `localhost:4000`. In examples I use he.

### Query
*Search some data from database*

* Returning `name` and `email` from all users

   <img src="https://imgur.com/IYJK4tZ.png"/>

* Returning only `name` from all users
  - To return only name, we just remove `email` from query
  
  <img src="https://imgur.com/eMVAHE9.png"/>
 
* Returning `name` and `email` from just 1 user

  <img src="https://imgur.com/5itVKAf.png"/>
  
### Mutation
*Change, create or delete some data from database*

* Creating a user

  <img src="https://imgur.com/ncufEOS.png"/>
   
---

## 🐁 Tecnologies

* [NodeJs](https://nodejs.org/en/)

  - [GraphQL Yoga](https://github.com/prisma/graphql-yoga)
  - [Sequelize ORM](https://sequelize.org/)
  - [PostgreSQL](https://www.npmjs.com/package/pg)
  - ~~Express~~
