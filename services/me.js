'use strict';

module.exports = function(fastify, opts, next) {
  fastify.route({
    method: 'GET',
    url: '/me',
    handler: (request, reply) => {
      reply.send({ user: request.user });
    },
    onRequest: fastify.basicAuth,
  });

  next();
};
