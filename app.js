//Foundational server imports
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//SQL Imports
const dbConfig = require('./dbConfig');
const connection = require('./util/connection');
const query = require('./util/query');

//Swagger Setup
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger/index');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Server Start-up
var server = app.listen(8080, function(){
    console.log('server is running on port 8080')
});

var playerRoutes = require('./routes/player.routes');
app.use("/player",playerRoutes);

var locationRoutes = require('./routes/location.routes');
app.use("/location",playerRoutes);

var weaponRoutes = require('./routes/weapon.routes');
app.use("/weapon",playerRoutes);