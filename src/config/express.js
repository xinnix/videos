const express = require('express');

module.exports = () => {
  const app = express();
  // app.engine('html', swig.renderFile);
  // app.set('view engine', 'html');
  // app.set('views', './dist');
  app.use(express.static('public'));

  return app;
};
