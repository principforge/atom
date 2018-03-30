// eslint-disable-next-line no-unused-vars
const { render } = require('./nuxt');

module.exports = function (app) {
  // Use Nuxt's render middleware
  app.use((req, res, next) => {
    switch (req.accepts('html', 'json')) {
    case 'json': {
      next();
      break;
    }
    default: {
      render(req, res, next);
    }
    }
  });
};
