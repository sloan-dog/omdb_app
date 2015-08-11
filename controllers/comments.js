var db = require('../models');
var express = require('express');
var router = express.Router();

router.post('/:favoriteID', function(req,res) {
  favoriteID = req.params.favoriteID;
  res.redirect('/',{myFavorite:favoriteID})
})

router.get('/:myFavorite', function(req,res) {
  myFavorite = req.params.myFavorite
  console.log(myFavorite);
  db.comment.findAll({where:{favoriteId:myFavorite},include:[db.favorite]}).then(function(selComments) {
    console.log(selComments);
    res.render('comments/index', {comments:selComments});
  });
});




router.post('/', function(req, res) {
  favoriteID = req.body.favoriteId;
  commentText = req.body.commentText;

  db.comment.create({text:commentText,favoriteId:favoriteID}).then(function() {
    res.redirect('/favorites')
  })
})

module.exports = router;