var Weapon = require('../model/weapon.model');

exports.list_all_weapons = function(req, res) {
  Weapon.getAllPlayers(function(err, weapon) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', weapon);
    res.send(weapon);
  });
};



exports.create_a_weapon = function(req, res) {
  var new_weapon = new Weapon(req.body);

  //handles null error 
   if(!new_weapon.weapon || !new_weapon.status){

            res.status(400).send({ error:true, message: 'Please provide weapon/status' });

        }
else{
  
  Weapon.createPlayer(new_weapon, function(err, weapon) {
    
    if (err)
      res.send(err);
    res.json(weapon);
  });
}
};


exports.read_a_weapon = function(req, res) {
  Weapon.getPlayerById(req.params.weaponId, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.update_a_weapon = function(req, res) {
  Weapon.updateById(req.params.weaponId, new Weapon(req.body), function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.delete_a_weapon = function(req, res) {


  Weapon.remove( req.params.weaponId, function(err, weapon) {
    if (err)
      res.send(err);
    res.json({ message: 'Weapon successfully deleted' });
  });
};