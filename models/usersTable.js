//to manipulate users table
var connect=require('./index')

var crud={
    insert: function(data){
        connect.conn.connect.query('INSERT INTO users(name,number,email,password,created_at) VALUES?',data,function (err,result) {
        if (err) throw err;
            console.log("users inserted successfully...");
    });
    },
    count: function(callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM users ", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            return callback(result[0].count);
        });
    },
    display: function(callback) {
        connect.conn.connect.query('SELECT * FROM users', function (err, result) {
            if (err) throw err;
            console.log("Displayed successfully"+result);
            console.log("Displayed successfully"+result[0]);
            console.log("Displayed successfully"+result[0].id);
            return callback(result);
        });
    },
    find: function(data,callback){
     connect.conn.connect.query("SELECT password as password FROM users WHERE email='"+data.email+"'",function (err,result) {
         if(err) throw err;
         console.log('Checking for password');
         if(result[0]===undefined){
             console.log('Wrong password');
             return callback(0);
         }
         else if(result[0].password===data.password) {
             console.log('Correct password');
             return callback(1);
         }
         else
         {
             console.log('Wrong password 2');
             return callback(0);
         }
     });
    },
    get_id:function(data,callback){
        connect.conn.connect.query("SELECT id FROM users WHERE email='"+data.email+"'",function (err,result) {
            console.log(result);
            callback(result);
        });
        }
}
module.exports=crud;