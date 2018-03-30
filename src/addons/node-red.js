const path = require('path');
const nodeRed = require('node-red');

const settings = {
  httpAdminRoot: '/editor',
  httpNodeRoot: '/platform/',
  // adminAuth: {
  //   type: "credentials",
  //   sessionExpiryTime: 86400,
  //   users: [{
  //     username: "admin",
  //     password: "princip",
  //     permissions: "*"
  //   }]
  // },
  editorTheme: {
    page: {
      title: 'Atom',
      // favicon: faviconPath
    },
    header: {
      title: 'Atom',
      // image: faviconPath
    }
  },
  flowFile: path.join(path.dirname(require.main.filename), 'data/flows.json'), // join paths of main dir and file.
  functionGlobalContext: { }    // enables global context.
};

module.exports = { nodeRed, settings };
