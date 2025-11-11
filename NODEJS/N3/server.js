const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Server error' });
});

app.listen(8080);
