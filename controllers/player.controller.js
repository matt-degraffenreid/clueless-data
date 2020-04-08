var Player = require('../model/player.model');

exports.list_all_players = function(req, res) {
  Player.getAllPlayers(function(err, player) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', player);
    res.send(player);
  });
};



exports.create_a_player = function(req, res) {
  var new_player = new Player(req.body);

  //handles null error 
   if(!new_player.player || !new_player.status){

            res.status(400).send({ error:true, message: 'Please provide player/status' });

        }
else{
  
  Player.createPlayer(new_player, function(err, player) {
    
    if (err)
      res.send(err);
    res.json(player);
  });
}
};


exports.read_a_player = function(req, res) {
  Player.getPlayerById(req.params.playerId, function(err, player) {
    if (err)
      res.send(err);
    res.json(player);
  });
};


exports.update_a_player = function(req, res) {
  Player.updateById(req.params.playerId, new Player(req.body), function(err, player) {
    if (err)
      res.send(err);
    res.json(player);
  });
};


exports.delete_a_player = function(req, res) {


  Player.remove( req.params.playerId, function(err, player) {
    if (err)
      res.send(err);
    res.json({ message: 'Player successfully deleted' });
  });
};