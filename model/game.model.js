const connection = require('../util/connection.js');
const query = require('../util/query');

const dbConfig = require('../dbConfig'); 
const initScript = require('../init.sql');

var Game = function(game){
    this.game = game;
    this.created_at = new Date();
}

Game.init = async function (result){
    const conn = await connection(dbConfig).catch(e => {}) 
    await query(conn, initScript, result).catch(console.log);
}