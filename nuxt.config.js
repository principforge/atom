const { resolve } = require('path');

module.exports = {
  srcDir: resolve(__dirname, 'client'),
  dev: process.env.NODE_ENV !== 'production',
  head: {
    titleTemplate: 'Atom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Atom (IoT Software)' },
    ],
  },
  build: {
    vendor: [
      // 'feathers/client',
      // 'feathers-hooks',
      // 'feathers-authentication-client',
    ],
  },
  css: ['normalize.css']
};
