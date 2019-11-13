'use strict';

const fp = require('fastify-plugin');
const basicAuth = require('fastify-basic-auth');

const users = {
  arya: 'stark',
  jon: 'snow',
};

const topics = {
  arya: ['sword', 'death', 'weapon'],
  jon: ['sword', 'night', 'know'],
};

const basicAuthPlugin = async (fastify, opts) => {
  const validate = async (username, password, req, reply) => {
    if (users[username] !== password) {
      throw new Error('Invalid username or password');
    }

    req.user = {
      name: username,
      topics: topics[username],
    };
  };

  fastify.register(basicAuth, { validate });
  fastify.decorateRequest('user', null);
};

module.exports = fp(basicAuthPlugin);
