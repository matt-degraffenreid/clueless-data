var Location = require('../model/location.model');

exports.list_all_locations = function(req, res) {
  Location.getAllPlayers(function(err, location) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', location);
    res.send(location);
  });
};



exports.create_a_location = function(req, res) {
  var new_location = new Location(req.body);

  //handles null error 
   if(!new_location.location || !new_location.status){

            res.status(400).send({ error:true, message: 'Please provide location/status' });

        }
else{
  
  Location.createPlayer(new_location, function(err, location) {
    
    if (err)
      res.send(err);
    res.json(location);
  });
}
};


exports.read_a_location = function(req, res) {
  Location.getPlayerById(req.params.locationId, function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};


exports.update_a_location = function(req, res) {
  Location.updateById(req.params.locationId, new Location(req.body), function(err, location) {
    if (err)
      res.send(err);
    res.json(location);
  });
};


exports.delete_a_location = function(req, res) {


  Location.remove( req.params.locationId, function(err, location) {
    if (err)
      res.send(err);
    res.json({ message: 'Location successfully deleted' });
  });
};