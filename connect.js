const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anjzsc1996',
    database: 'noteapp',
    port: 3306
});

conn.connect(function(err) {
    if(err) throw err;
});

module.exports = conn;