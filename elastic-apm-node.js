'use strict';

const { hostname } = require('os');

module.exports = {
  serviceName: hostname().replace(/[^-_A-Za-z0-9]/g, '_'),
  secretToken: 'iIuuYeEZ2Gw3DM3pbQ',
  serverUrl:
    'https://4d4d680091794dfab8323e49fb2faf57.apm.europe-west2.gcp.elastic-cloud.com:443',
  active: true,
};
