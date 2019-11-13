'use strict';

const { test } = require('tap');
const { build } = require('../helper');

test('default root route', async t => {
  const app = build(t);

  const response = await app.inject({
    url: '/me',
  });

  t.strictEqual(response.statusCode, 200);

  // t.error(err);
  // t.deepEqual(JSON.parse(res.payload), { root: true });
});
