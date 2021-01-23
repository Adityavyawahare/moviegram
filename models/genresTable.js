var connect=require('./index')

var crud={
    insert_genre: function(data){
        connect.conn.connect.query('INSERT INTO genre_list(genre_text) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("genre inserted successfully...");
        });
    },
    insert_genre_link:function(data) {
        connect.conn.connect.query('INSERT INTO genre_links(movie_id,genre_id) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("genre links inserted successfully...");
        });
    },
    count: function(callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM genre_list ", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            return callback(result[0].count);
        });
    },
    display: function(callback) {
        connect.conn.connect.query('SELECT * FROM genre_list', function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    }
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