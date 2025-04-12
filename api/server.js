const express = require('express');
const serverless = require('serverless-http');
const app = express();
const path = require('path');

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// View engine setup if needed
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug'); // or ejs, whatever you're using

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

module.exports.handler = serverless(app);
