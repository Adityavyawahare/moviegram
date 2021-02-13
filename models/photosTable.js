var connect=require('./index')

var crud={
    insert: function(data){
        return new Promise(function(resolve, reject) {
        connect.conn.connect.query('INSERT INTO photos(image_url,movie_id) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("photos inserted successfully...");
        });
        resolve();
    })
    },
    count: function(callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM photos ", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            return callback(result[0].count);
        });
    },
    display: function(callback) {
        connect.conn.connect.query('SELECT * FROM photos', function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    },
    display_movies_and_images:function(callback){
        connect.conn.connect.query('select url,name,imdb from users inner join images on images.movie_id=users.id;', function (err, result) {
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