var db = require('../models');
var express = require('express');
var router = express.Router();


// SHOW favorites index
router.get('/', function(req,res) {
  db.favorite.findAll().then(function(favorites) {
    res.render('favorites/index', {myFavorites:favorites});
  });
});

router.post('/', function(req,res) {
  movieId = req.body.movieId
  movieTitle = req.body.title
  movieYear = req.body.year
  moviePoster = req.body.poster
  db.favorite.create({
    imdbId:movieId,
    title:movieTitle,
    year:movieYear,
    poster:moviePoster
  }).then(function() {
    res.redirect('/search');
  });

});

module.exports = router;