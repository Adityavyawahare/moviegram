var connect=require('./index')

var crud={
    insert: function(data){
        connect.conn.connect.query('INSERT INTO likes(user_id,comment_id) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("like inserted successfully...");
        });
    },
    count: function(data,callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM likes where comment_id="+data+";", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            callback(result[0].count);
        });
    }
    // display: function(movie_id,callback) {
    //     connect.conn.connect.query('SELECT comments.id,name,comment_text FROM users inner join comments on users.id = comments.user_id where movie_id='+movie_id+' ORDER BY comments.created_at DESC', function (err, result) {
    //         if (err) throw err;
    //         return callback(result);
    //     });
    // }
    // find: function(data,callback){
    //     connect.conn.connect.query("SELECT password as password FROM movies WHERE email='"+data.email+"'",function (err,result) {
    //         if(err) throw err;
    //         console.log('Checking for password');
    //         if(result[0]===undefined){
    //             console.log('Wrong password');
    //             return callback(0);
    //         }
    //         else if(result[0].password===data.password) {
    //             console.log('Correct password');
    //             return callback(1);
    //         }
    //         else
    //         {
    //             console.log('Wrong password 2');
    //             return callback(0);
    //         }
    //     });
    // }
}
module.exports=crud;