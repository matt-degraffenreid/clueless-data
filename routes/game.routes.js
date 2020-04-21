var express = require('express');
var router = express.Router();

var game = require('../controllers/game.controller');

// define the home page route
router.route('/')
    .get(game.init);

module.exports = router;