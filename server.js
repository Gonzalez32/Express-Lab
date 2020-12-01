// Load express
const express = require('express');
const path = require('path');
const newsDb = require('./data/soccer')
const scoresDb = require('./data/scores')
const standingsDb = require('./data/standings')

// Create our express app
const app = express();


// Configure the app (app.set)
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, 'views'))
	
// Mount middleware (app.use)
app.use(express.static(path.join(__dirname, 'public')));
	
// Mount routes


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>');
    res.redirect('/soccer')
});

app.get('/soccer', (req, res) => {
    res.render('soccer', {news: newsDb.getAll()})
})

app.get('/soccer/scoreboard', (req, res) => {
    res.render('scoreboard', {scores: scoresDb.getAll()})
})

app.get('/soccer/standing', (req, res) => {
    res.render('standings', {standings: standingsDb.getAll()})
})

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});