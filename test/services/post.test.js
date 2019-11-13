'use strict';

const { test } = require('tap');
const { build } = require('../helper');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test('should thrown Not Authenticated', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/post',
    method: 'POST',
  });

  t.strictEqual(response.statusCode, 401);
  t.deepEqual(JSON.parse(response.payload), {
    statusCode: 401,
    error: 'Unauthorized',
    message: 'Missing or bad formatted authorization header',
  });
});

test('should thrown params are not valid', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/post',
    method: 'POST',
    headers: {
      Authorization: 'Basic YXJ5YTpzdGFyaw==',
    },
  });

  t.strictEqual(response.statusCode, 400);
  t.deepEqual(JSON.parse(response.payload), {
    error: 'Bad Request',
    message: 'body should be object',
    statusCode: 400,
  });
});

test('should log into Kibana and then check if record is present', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/post',
    method: 'POST',
    headers: {
      Authorization: 'Basic YXJ5YTpzdGFyaw==',
    },
    body: {
      text: `TEST`,
    },
  });

  await sleep(1000); // mai god ...

  const { body } = await app.elastic.search({
    index: 'emanuels-macbook-pro_local-tweets',
    body: {
      query: { term: JSON.parse(response.payload) },
    },
  });
  t.strictEqual(body.hits.total.value, 1);
});
