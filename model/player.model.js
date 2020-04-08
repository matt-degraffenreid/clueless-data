const connection = require('../util/connection.js');
const query = require('../util/query');

const dbConfig = require('../dbConfig'); 

var Player = function(player){
    this.player = player;
    this.created_at = new Date();
}

Player.createPlayer = async function (newPlayer, result){
    const conn = await connection(dbConfig).catch(e => {}) 
    await query(conn, "INSERT INTO player set ?", newPlayer, result).catch(console.log);
}

Player.getPlayerById = async function(playerId, result){
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, "Select * from player where player_id = ? ", playerId, result).catch(console.log);
    
}

Player.getAllPlayers = async (result) => {
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, 'SELECT * FROM player', result).catch(console.log);
    
  }

Player.updateById  = async function(id, player, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "UPDATE player SET player = ? WHERE player_id = ?", [player.player, id], result).catch(console.log);
}

Player.remove = async function(id, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "DELETE FROM player WHERE player_id = ?", [id], result).catch(console.log);
}

module.exports= Player;