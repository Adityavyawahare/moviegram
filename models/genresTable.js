const { promiseImpl } = require('ejs');
var connect=require('./index')

var crud={
    insert_genre: function(data,callback){
        return new Promise(function(resolve, reject) {
        connect.conn.connect.query('INSERT INTO genre_list(genre_text) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("genre inserted successfully...",data);
            resolve();
        });
    })
    },
    insert_genre_link:function(data) {
        return new Promise(function(resolve, reject) {
        connect.conn.connect.query('INSERT INTO genre_links(movie_id,genre_id) VALUES?',data,function (err,result) {
            if (err) throw err;
            console.log("genre links inserted successfully...",data);
            resolve();
        });
    })
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
    },
    find: async function(data,callback){
        return new Promise(function(resolve, reject) {
        connect.conn.connect.query("SELECT id as id FROM genre_list  WHERE genre_text='"+data+"'",function (err,result) {
            if (err) throw err;
            if(result.length==0)
            {
                resolve(-1);
            }
            else{
                resolve(result[0].id)
            }
        });
    })
    },
    get_filter:function(callback){
        connect.conn.connect.query("SELECT id as id,genre_text as text FROM genre_list",function (err,result) {
            if (err) throw err;
            callback(result);
        });
    }
}
module.exports=crud;