var Weapon = require('../model/weapon.model');

exports.list_all_players = function(req, res) {
  Weapon.getAllPlayers(function(err, weapon) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', weapon);
    res.send(weapon);
  });
};



exports.create_a_player = function(req, res) {
  var new_player = new Weapon(req.body);

  //handles null error 
   if(!new_player.weapon || !new_player.status){

            res.status(400).send({ error:true, message: 'Please provide weapon/status' });

        }
else{
  
  Weapon.createPlayer(new_player, function(err, weapon) {
    
    if (err)
      res.send(err);
    res.json(weapon);
  });
}
};


exports.read_a_player = function(req, res) {
  Weapon.getPlayerById(req.params.playerId, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.update_a_player = function(req, res) {
  Weapon.updateById(req.params.playerId, new Weapon(req.body), function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.delete_a_player = function(req, res) {


  Weapon.remove( req.params.playerId, function(err, weapon) {
    if (err)
      res.send(err);
    res.json({ message: 'Weapon successfully deleted' });
  });
};