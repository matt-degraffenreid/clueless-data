var Location = require('../model/location.model');

exports.list_all_players = function(req, res) {
  Location.getAllPlayers(function(err, location) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', location);
    res.send(location);
  });
};



exports.create_a_player = function(req, res) {
  var new_player = new Location(req.body);

  //handles null error 
   if(!new_player.location || !new_player.status){

            res.status(400).send({ error:true, message: 'Please provide location/status' });

        }
else{
  
  Location.createPlayer(new_player, function(err, location) {
    
    if (err)
      res.send(err);
    res.json(location);
  });
}
};


exports.read_a_player = function(req, res) {
  Location.getPlayerById(req.params.playerId, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};


exports.update_a_player = function(req, res) {
  Location.updateById(req.params.playerId, new Location(req.body), function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};


exports.delete_a_player = function(req, res) {


  Location.remove( req.params.playerId, function(err, location) {
    if (err)
      res.send(err);
    res.json({ message: 'Location successfully deleted' });
  });
};