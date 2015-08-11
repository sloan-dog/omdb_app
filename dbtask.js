var db = require('./models');

// var end = db.favorite.findAll().then(function(favorites) {
  // var end = favorites.length;
  var end = 4;
  for(var i = 0; i <= end; i+= 1) {
    db.favorite.find({where: {id:i}}).then(function(favorite) {
      favorite.createComment({
        text: 'blaiojsdfgsdfgh blah blah',
        favoriteId: i
      }).then(console.log);
    })
  }

// });
