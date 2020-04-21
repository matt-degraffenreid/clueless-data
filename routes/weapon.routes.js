var express = require('express');
var router = express.Router();

var weapon = require('../controllers/weapon.controller');

// define the home page route
router.route('/')
    .get(weapon.list_all_weapons)
    .post(weapon.create_a_weapon);

router.route('/:weaponId')
    .get(weapon.read_a_weapon)
    .put(weapon.update_a_weapon)
    .delete(weapon.delete_a_weapon);

module.exports = router;