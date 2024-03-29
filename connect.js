const mysql = require('mysql');
require('dotenv').config()

const conn = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port
});

conn.connect(function(err) {
    if(err) throw err;
});

module.exports = conn;