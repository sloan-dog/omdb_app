var db = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  favoriteID = req.body.favoriteId
  // db.comment.findAll({where: {favoriteId:}})
  res.render('comments/index', {myFavorite:favoriteID})
})

router.post('/', function(req, res) {
  myComment = req.body.commentText
  db.comment.create({text:myComment,favoriteId:3}).then(function() {
    res.redirect('/')
  })
})

module.exports = router;