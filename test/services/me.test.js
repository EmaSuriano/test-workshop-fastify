'use strict';

const { test } = require('tap');
const { build } = require('../helper');

test('should thrown Not Authenticated', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/me',
    method: 'GET',
  });

  t.strictEqual(response.statusCode, 401);
  t.deepEqual(JSON.parse(response.payload), {
    statusCode: 401,
    error: 'Unauthorized',
    message: 'Missing or bad formatted authorization header',
  });
});

test('should return user values', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/me',
    method: 'GET',
    headers: {
      Authorization: 'Basic YXJ5YTpzdGFyaw==',
    },
  });

  t.strictEqual(response.statusCode, 200);
  t.deepEqual(JSON.parse(response.payload), {
    user: { name: 'arya', topics: ['sword', 'death', 'weapon'] },
  });
});
