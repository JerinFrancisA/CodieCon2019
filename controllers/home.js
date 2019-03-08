/**
 * GET /
 * Home page.
 */
 var express = require('express');
 var app = express();
 app.set('view engine', 'pug');
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
