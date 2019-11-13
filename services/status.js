'use strict';

module.exports = function(fastify, opts, next) {
  fastify.get('/status', function(request, reply) {
    reply.send({ status: 'ok' });
  });

  next();
};
