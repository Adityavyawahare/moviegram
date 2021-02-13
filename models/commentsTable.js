var connect=require('./index')

var crud={
    insert: function(data,callback){
        connect.conn.connect.query('INSERT INTO comments(comment_text,user_id,movie_id,created_at) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("comment inserted successfully...");
            callback();
        });
    },
    count: function(callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM comments ", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            return callback(result[0].count);
        });
    },
    display: function(movie_id,callback) {
        connect.conn.connect.query("SELECT rating,comments.id,name,comment_text,(select count(*) from likes where comment_id=comments.id) as likes,comments.created_at from\n" +
            "comments left join ratings on comments.id = ratings.comment_id left join likes on likes.comment_id = comments.id inner join users\n" +
            "on users.id = comments.user_id  where comments.movie_id='"+movie_id+"' group by comments.id ORDER BY\n" +
            "comments.created_at DESC;", function (err, result) {
            if (err) throw err;
            return callback(result);
        });
    },
    order_by: function(data,callback) {
            connect.conn.connect.query("SELECT rating,comments.id,name,comment_text,count(*) as likes,comments.created_at\n"+
                " from comments left join ratings on comments.id = ratings.comment_id left join likes on likes.comment_id = comments.id inner join users\n"+
                " on users.id = comments.user_id  where comments.movie_id="+data.movie_id+" group by comments.id ORDER BY\n"+
                data.value+" DESC;", function (err, result) {
                if (err) throw err;
                console.log("SELECT comments.id,name,comment_text,count(*) as likes,comments.created_at\n"+
                    " from comments left join likes on likes.comment_id = comments.id inner join users\n"+
                    " on users.id = comments.user_id  where movie_id="+data.movie_id+" group by comments.id ORDER BY\n"+
                    data.value+" DESC;")
                return callback(result);
            });
    },
    get_id:function(data,callback){
        connect.conn.connect.query("SELECT id FROM comments where movie_id='"+data.movie_id+"' and user_id="+data.user_id+" order by created_at desc limit 1;", function (err, result) {
            if (err) throw err;
            callback(result[0].id);
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