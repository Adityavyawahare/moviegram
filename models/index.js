var mysql = require('mysql');
let cloud = require('../config/cloud');
//database setup
var connection= mysql.createConnection({
    host     : cloud.db_data.host,
    user     : cloud.db_data.user,     // your root username
    password : cloud.db_data.password,
    database : cloud.db_data.database   // the name of your db
});
exports.conn=
    {
        connect:connection
    };