// connect
const mysql = require('mysql');

module.exports = async (params) => new Promise(
(resolve, reject) => {
	const connection = mysql.createConnection({ host: 'localhost', user: 'root', password: '', database: 'clueless',multipleStatements: true });
  connection.connect(error => {
	  if (error) {
          console.log('no connection');
          console.log(error);

      reject(error);
      return;
    }
    resolve(connection);
  })
});