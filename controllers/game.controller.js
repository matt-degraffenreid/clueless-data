var Game = require('../model/game.model');

exports.init = function(req, res) {
  Game.init(function(err, location) {
    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', location);
    res.send(location);
  });
};
