var connect=require('./index')

var crud={
    insert: function(data,callback){
        connect.conn.connect.query('INSERT INTO ratings(user_id,movie_id,comment_id,rating) VALUES ?',data,function (err,result) {
            if (err) throw err;
            console.log("rating Inserted successfully...");
            console.log('--Port ready!!!--')
        });
        callback();
    },
    count: function(data,callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM ratings where comment_id="+data+" group by comment_id;", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            callback(result[0].count);
        });
    }
}
module.exports=crud;