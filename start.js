
require("regenerator-runtime/runtime");
require('babel-register')({
    presets: ['env']
});

module.exports = require('./app.js');