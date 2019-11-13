'use strict';

const path = require('path');
const AutoLoad = require('fastify-autoload');
const { hostname } = require('os');

module.exports = function(fastify, opts, next) {
  fastify.register(require('fastify-elasticsearch'), {
    cloud: {
      id:
        'fastify-workshop:ZXVyb3BlLXdlc3QyLmdjcC5lbGFzdGljLWNsb3VkLmNvbSQzOGU4ZWI4ODY1ZmU0ZDI5OGY1Y2FiMmQzZjQ4OTc0MiRkMjYwZGYxNWExZjY0YWM1OTU2NjY1ZTJkOTk3OGNhOA==',
    },
    auth: {
      username: 'workshop',
      password: 'workshop-42',
    },
  });

  fastify.register(require('@delvedor/fastify-workshop-dataset'), {
    indexName: `${hostname()
      .replace(/[^-_A-Za-z0-9]/g, '_')
      .toLowerCase()}-tweets`,
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts),
  });

  next();
};
