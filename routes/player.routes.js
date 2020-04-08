var express = require('express');
var router = express.Router();

var player = require('../controllers/player.controller');

// define the home page route
router.route('/')
    .get(player.list_all_players)
    .post(player.create_a_player);

router.route('/player/:playerId')
    .get(player.read_a_player)
    .put(player.update_a_player)
    .delete(player.delete_a_player);

module.exports = router;
    
