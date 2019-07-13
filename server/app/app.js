const path = require('path');
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 5000;
const devMode = process.env.NODE_ENV !== 'production';

app.use(morgan(devMode ? 'dev' : 'combined'));

app.use(express.static(path.join(__dirname, '../../client/build')));
// app.use('/public', express.static(path.join(__dirname, '../public')));

app.use(compression());

app.get('/ping', (req, res) => res.send('pong'));

app.get('/*', (req, res) => {
  res.sendFile(
    path.join(
      __dirname, '../../client/build/', 'index.html',
    ),
  );
});

app.listen(PORT, () => {
  console.log(`🚀  Shaking on port ${PORT} 🍸🍹🍻`);
});

module.exports = app;
