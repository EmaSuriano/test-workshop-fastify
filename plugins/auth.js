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

async function basicAuthPlugin(fastify, opts) {
  const validate = async (username, password, req, reply) => {
    console.log('Validation in progress');

    if (users[username] !== password) {
      console.log('should throw');
      throw new Error('Invalid username or password');
    }

    req.user = {
      name: username,
      topics: topics[username],
    };
  };
  console.log('plugin loaded!');
  fastify.register(basicAuth, { validate });
  fastify.decorateRequest('user', null);
}

module.exports = fp(basicAuthPlugin);
