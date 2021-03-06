var connect=require('./index')

var crud= {
    insert: function (data) {
        return new Promise(function(resolve, reject) {
        connect.conn.connect.query("INSERT INTO movies(id,name,imdb,time) VALUES ?",data, function (err, result) {
            //console.log('INSERT INTO movies(id,name,imdb,time) VALUES ?',data)
            if (err) throw err;
            resolve()
            console.log("movie inserted successfully...");
        });
    })
    },
    count: function (callback) {
        connect.conn.connect.query("SELECT COUNT(*) AS count FROM movies ", function (err, result) {
            console.log("Counted successfully" + result[0].count);
            if (err) throw err;
            return callback(result[0].count);
        });
    },
    display: function (callback) {
        connect.conn.connect.query('SELECT * FROM movies', function (err, result) {

            if (err) throw err;
            return callback(result);
        });
    },
    display_movies_and_images: function (callback) {
        connect.conn.connect.query('select image_url,name,imdb,movies.id as id from movies inner join photos on photos.movie_id=movies.id;', function (err, result) {
            if (err) throw err;
            console.log(result);
            return callback(result);
        });
    },
    find: function (data, callback) {
        connect.conn.connect.query("select image_url,name,imdb,description from movies inner join photos on photos.movie_id=movies.id where name=?", data, function (err, result) {
            if (err) throw err;
            if (result[0] !== undefined) {
                console.log('Correct movie');
                return callback(result);
            } else {
                console.log('Wrong movie 2');
                return callback(0);
            }
        });
    },
    find_filter: function (data, callback) {
        var q = '';
        if (data.sort == undefined) {
            data.sort = 'ASC'
        }
        if (data.imdb === undefined && data.genre === undefined) {
            q = '';
        } else if (data.imdb === undefined) {
            q = ' where genre_links.genre_id=' + data.genre;
        } else if (data.genre === undefined) {
            q = ' where movies.imdb ' + data.imdb;
        } else {
            q = ' where genre_links.genre_id=' + data.genre + ' AND ' + 'movies.imdb ' + data.imdb;
        }
        // console.log('select image_url,name,imdb,genre_links.movie_id from movies \n' +
        //     'inner join photos on photos.movie_id=movies.id inner join genre_links on movies.id=genre_links.movie_id \n' + '' +
        //     'inner join genre_list on genre_links.genre_id = genre_list.id' +
        //     q + ' order by movies.imdb ');
        connect.conn.connect.query('select image_url,name,imdb,genre_links.movie_id,movies.id as id from movies \n' +
            'inner join photos on photos.movie_id=movies.id inner join genre_links on movies.id=genre_links.movie_id \n' + '' +
            'inner join genre_list on genre_links.genre_id = genre_list.id' +
            q + ' group by movies.id order by movies.imdb ' + data.sort + ';'
            , function (err, result) {
                console.log(result);
                if (err) throw err;
                if (result[0] !== undefined) {
                    return callback(result);
                } else {
                    console.log('No Movie');
                    return callback(0);
                }
            });
    },
    get_id: function (data, callback) {
        console.log(data);
        connect.conn.connect.query("select id from movies where name='" + data + "';", function (err, result) {
            console.log("select id from movies where name='" + data + "';")
            if (err) throw err;
            callback(result);
        });
    },
    search: function (data, callback) {
        console.log(data);
        connect.conn.connect.query("select image_url,name,imdb,description from movies inner join photos on photos.movie_id=movies.id where name LIKE '%" + data + "%'", function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    average_rating:function (data, callback) {
        console.log(data);
        connect.conn.connect.query("SELECT IFNULL(AVG(rating),0.0) as average from ratings where movie_id=?", data, function (err, result) {
            if (err) throw err;
            console.log(result);
            callback(result[0].average.toFixed(2));
        });
    },
    find_if:function(data,callback){
        var result=0;
        connect.conn.connect.query("SELECT name FROM movies WHERE id=?", data, function (err, result) {
            if (err) throw err;
            console.log(result);
            if(result[0]===undefined){callback(0);}
            else{callback(1)};
        });
    }
}
module.exports=crud;