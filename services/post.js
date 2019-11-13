'use strict';

const hyperid = require('hyperid');
const instance = hyperid();

module.exports = function(fastify, opts, next) {
  fastify.route({
    method: 'POST',
    url: '/post',
    schema: {
      body: {
        type: 'object',
        properties: {
          text: { type: 'string' },
        },
        required: ['text'],
      },
    },
    handler: async (request, reply) => {
      const id = instance.uuid;

      const response = {
        id,
        user: request.user.name,
        topics: request.user.topics,
        text: request.body.text,
        time: Date.now(),
      };

      await fastify.elastic.index({
        index: 'emanuels-macbook-pro_local-tweets',
        body: response,
      });

      return { id: response.id };
    },
    onRequest: fastify.basicAuth,
  });

  next();
};
