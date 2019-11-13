'use strict';

module.exports = function(fastify, opts, next) {
  fastify.route({
    method: 'GET',
    url: '/tweet/:id',
    handler: async (request, reply) => {
      const { id } = request.params;

      const { body } = await fastify.elastic.search({
        index: 'emanuels-macbook-pro_local-tweets',
        body: {
          query: { term: { id } },
        },
      });

      return body.hits.hits[0]._source;
    },
    onRequest: fastify.basicAuth,
  });

  next();
};
