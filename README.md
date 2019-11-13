# Workshop Fastify 2019 - NodeConf 2019

## Workshop steps

1. Generate test project: `npx fastify-cli generate workshop`
2. Add new route `/status` inside the `services` folder
3. Test the new route inside `test/services`
4. Create auth plugin using `fastify-basic-auth`
5. Test auth plugin inside `test/plugins`
6. Add new route `/me` that will return the information of the user
7. Test route `/me` with two possible paths
8. Add new elastic search database:
   1. Install `fastify-elasticsearch`
   2. Setup your `app.js` with the Instructions in the Resources at the bottom
9. Create a new route `/post` that will receive an object with the property `text` and create an object with the structure of: `{id, user, topics, text, time, }` and log it into Elastic Search.
10. Create test for `/post`, sending the request and then checking if the record is in elastic search.
11. Create new route `/tweet/:id` that will return the information of a tweet given the id sent by parameters.
12. Add test
13. Create the route `/timeline` that will return the latest tweets sort by time.
14. Add tracking with APM
15. At the end they explained that you can easily create micro services of this monolith by creating n copies of the project and then leaving only a few routes on each project. This will give 3 projects running in different ports, therefore you can use `fastify-http-proxy` to link all the different services into one. And also they provide a docker file that shows how to put everything in a container ✨

## Resources given in the workshop

- [Workshop Repo](https://github.com/delvedor/fastify-architecture-workshop)
- [Fastify Homepage](https://www.fastify.io/)
- [Elastic Search instructions](https://gist.github.com/delvedor/59528c3b89d79a0b17ce71a8798bb074)
- [Kibana logs for the submitted tweets](<https://d260df15a1f64ac5956665e2d9978ca8.europe-west2.gcp.elastic-cloud.com/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:fba651a0-05fc-11ea-86a0-95d69bf47b43,interval:auto,query:(language:kuery,query:''),sort:!(!(time,desc)))>)
- [Kibana Traces](<https://d260df15a1f64ac5956665e2d9978ca8.europe-west2.gcp.elastic-cloud.com/app/apm#/services/Emanuels-MacBook-Pro_local/transactions?rangeFrom=now-24h&rangeTo=now&refreshPaused=true&refreshInterval=0&transactionType=request&_g=()>)

## Last words

I think this has been an amazing workshop for various reasons:

- I've never worked with the framework so for me everything was new 😄
- The workshop was given by the **maintainers** of the framework 🔥
- It was a full demo using real services and technologies, not just a TODO app 😉
- All the steps were very clear and you can also check the documentation in case you are lost or anything 👌
