const connection = require('../util/connection.js');
const query = require('../util/query');

const dbConfig = require('../dbConfig'); 

var Location = function(location){
    this.location = location;
    this.created_at = new Date();
}

Location.createPlayer = async function (newPlayer, result){
    const conn = await connection(dbConfig).catch(e => {}) 
    await query(conn, "INSERT INTO location set ?", newPlayer, result).catch(console.log);
}

Location.getPlayerById = async function(locationId, result){
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, "Select * from location where location_id = ? ", locationId, result).catch(console.log);
    
}

Location.getAllPlayers = async (result) => {
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, 'SELECT * FROM location', result).catch(console.log);
    
  }

Location.updateById  = async function(id, location, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "UPDATE location SET location = ? WHERE location_id = ?", [location.location, id], result).catch(console.log);
}

Location.remove = async function(id, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "DELETE FROM location WHERE location_id = ?", [id], result).catch(console.log);
}

module.exports= Location;