var express = require('express');
var router = express.Router();

var location = require('../controllers/location.controller');

// define the home page route
router.route('/')
    .get(location.list_all_locations)
    .post(location.create_a_location);

router.route('/location/:locationId')
    .get(location.read_a_location)
    .put(location.update_a_location)
    .delete(location.delete_a_location);

module.exports = router;