'use strict';

const { test } = require('tap');
const Fastify = require('fastify');
const basicAuthPlugin = require('../../plugins/auth');

test('support works standalone', t => {
  const fastify = Fastify();

  fastify.register(basicAuthPlugin).after(() => {
    fastify.route({
      method: 'GET',
      path: '/',
      onRequest: fastify.basicAuth,
      handler: () => {
        status: 'ok';
      },
    });
  });

  fastify.inject(
    {
      method: 'GET',
      url: '/',
    },
    (err, res) => {
      t.strictEqual(res.statusCode, 401);
      t.end();
    },
  );
});

test('support works standalone', t => {
  const fastify = Fastify();

  fastify.register(basicAuthPlugin).after(() => {
    fastify.route({
      method: 'GET',
      path: '/',
      onRequest: fastify.basicAuth,
      handler: async () => {
        return { status: 'ok' };
      },
    });
  });

  fastify.inject(
    {
      method: 'GET',
      url: '/',
      headers: {
        Authorization: 'Basic YXJ5YTpzdGFyaw==',
      },
    },
    (err, res) => {
      t.strictEqual(res.statusCode, 200);
      t.deepEqual(JSON.parse(res.payload), { status: 'ok' });
      t.end();
    },
  );
});
