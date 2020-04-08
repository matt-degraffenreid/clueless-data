const connection = require('../util/connection.js');
const query = require('../util/query');

const dbConfig = require('../dbConfig'); 

var Weapon = function(weapon){
    this.weapon = weapon;
    this.created_at = new Date();
}

Weapon.createPlayer = async function (newPlayer, result){
    const conn = await connection(dbConfig).catch(e => {}) 
    await query(conn, "INSERT INTO weapon set ?", newPlayer, result).catch(console.log);
}

Weapon.getPlayerById = async function(weaponId, result){
    const conn = await connection(dbConfig).catch(e => {});
    const results = await query(conn, "Select * from weapon where weapon_id = ? ", weaponId, result).catch(console.log);
    
}

Weapon.getAllPlayers = async (result) => {
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, 'SELECT * FROM weapon', result).catch(console.log);
    
  }

Weapon.updateById  = async function(id, weapon, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "UPDATE weapon SET weapon = ? WHERE weapon_id = ?", [weapon.weapon, id], result).catch(console.log);
}

Weapon.remove = async function(id, result){
    const conn = await connection(dbConfig).catch(e => {});
    await query(conn, "DELETE FROM weapon WHERE weapon_id = ?", [id], result).catch(console.log);
}

module.exports= Weapon;