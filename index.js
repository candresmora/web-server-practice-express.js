require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs'); 
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estatico
app.use( express.static( 'public' ));

app.get('/',  (req, res) => {
  res.render('home', {
    title: 'Curso de Node.js',
    name: 'Andres Mora'
  });
});

app.get('/generic' , (req, res) => {
  res.render('generic', {
    title: 'Curso de Node.js',
    name: 'Andres Mora'
  });
});

app.get('/elements' , (req, res) => {
  res.render('elements', {
    title: 'Curso de Node.js',
    name: 'Andres Mora'
  });
});

app.get('/hola-mundo',  (req, res) => {
    res.send('Hello World');
});

  app.get('*',  (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});