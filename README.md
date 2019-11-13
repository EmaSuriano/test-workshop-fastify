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
11. Create new endpoind `/tweet/:id` that will return the information of a tweet given the id sent by parameters.
12. Add test
13. Create the endpoind `/timeline`

## Resources given in the workshop

- [Workshop Repo](https://github.com/delvedor/fastify-architecture-workshop)
- [Fastify Homepage](https://www.fastify.io/)
- [Elastic Search instructions](https://gist.github.com/delvedor/59528c3b89d79a0b17ce71a8798bb074)
- [Kibana logs for the submitted tweets](<https://d260df15a1f64ac5956665e2d9978ca8.europe-west2.gcp.elastic-cloud.com/app/kibana#/discover?_g=()&_a=(columns:!(_source),index:fba651a0-05fc-11ea-86a0-95d69bf47b43,interval:auto,query:(language:kuery,query:''),sort:!(!(time,desc)))>)
