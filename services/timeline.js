'use strict';

module.exports = function(fastify, opts, next) {
  fastify.route({
    method: 'GET',
    url: '/timeline',
    handler: async (request, reply) => {
      const { body } = await fastify.elastic.search({
        index: 'emanuels-macbook-pro_local-tweets',
        body: {
          query: { match_all: {} },
          sort: { time: { order: 'desc' } },
        },
      });

      const docs = body.hits.hits.map(h => h._source);
      return docs;
    },
    onRequest: fastify.basicAuth,
  });

  next();
};
