var connect=require('../models/index')
//to create users Table
exports.users={
  create: function(){
      connect.conn.connect.query('create table users(\n' +
          '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
          '  name VARCHAR(255) NOT NULL,\n' +
          '  number VARCHAR(255) UNIQUE NOT NULL,\n' +
          '  email VARCHAR(255) UNIQUE NOT NULL,\n' +
          '  password VARCHAR(255) UNIQUE NOT NULL,\n' +
          '  created_at TIMESTAMP DEFAULT NOW()\n' +
          ');',function (err,result) {
          if (err) throw err;
          console.log("Users table was created...");
      })
  },
    drop: function(){
      connect.conn.connect.query('DROP TABLE IF EXISTS users',function(err,result)
      {
          if (err) throw err;
          console.log("Users table was dropped...")
      });
    }
};