var connect=require('../models/index')
//to create users Table
exports.movies={
    create: function(){
<<<<<<< HEAD
        connect.conn.connect.query('create table movies(\n' +
            '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
            '  name VARCHAR(255) NOT NULL,\n' +
            '  description VARCHAR(255),\n' +
            '  imdb DECIMAL(2,1) NOT NULL,\n' +
            '  created_at TIMESTAMP DEFAULT NOW()\n' +
=======
        connect.conn.connect.query('create table movies(\n'+
            'id VARCHAR(15) PRIMARY KEY,\n'+
            'name VARCHAR(300) NOT NULL,\n'+
            'imdb DECIMAL(2,1) NOT NULL,\n'+
            'time VARCHAR(20) NOT NULL,\n'+
            'created_at TIMESTAMP DEFAULT NOW()\n'+
>>>>>>> c1a895f (omdb api based moviegram)
            ');',function (err,result) {
            if (err) throw err;
            console.log("Movies table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS movies',function(err,result)
        {
            if (err) throw err;
            console.log("Movies table was dropped...")
        });
    }
};
exports.comments={
    create: function(){
        connect.conn.connect.query('create table comments(\n' +
            '  id INT AUTO_INCREMENT PRIMARY KEY ,\n' +
            '  comment_text VARCHAR(300) NOT NULL,\n' +
            '  user_id INT NOT NULL,\n' +
            '  movie_id INT NOT NULL,\n' +
            '  created_at TIMESTAMP DEFAULT NOW(),\n' +
            '  FOREIGN KEY(user_id) REFERENCES users(id),\n' +
            '  FOREIGN KEY(movie_id) REFERENCES movies(id)\n' +
            ');',function (err,result) {
            if (err) throw err;
            console.log("comments table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS comments',function(err,result)
        {
            if (err) throw err;
            console.log("comments table was dropped...")
        });
    }
};
exports.photos={
    create: function(){
        connect.conn.connect.query('create table photos(\n' +
            '  id INT AUTO_INCREMENT PRIMARY KEY,\n' +
            '  image_url VARCHAR(255) NOT NULL,\n' +
            '  movie_id INT NOT NULL,\n' +
            '  FOREIGN KEY(movie_id) REFERENCES movies(id)\n' +
            ');',function (err,result) {
            if (err) throw err;
            console.log("photos table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS photos',function(err,result)
        {
            if (err) throw err;
            console.log("photos table was dropped...")
        });
    }
};
exports.ratings={
    create: function(){
        connect.conn.connect.query('create table ratings(\n' +
            '  user_id INT NOT NULL,\n' +
            '  movie_id INT NOT NULL,\n' +
            '  comment_id INT NOT NULL,\n' +
            '  rating DECIMAL(2,1) NOT NULL,\n' +
            '  FOREIGN KEY(user_id) REFERENCES users(id),\n' +
            '  FOREIGN KEY(movie_id) REFERENCES movies(id),\n' +
            '  FOREIGN KEY(comment_id) REFERENCES comments(id)\n' +
            ');',function (err,result) {
            if (err) throw err;
            console.log("ratings table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS ratings',function(err,result)
        {
            if (err) throw err;
            console.log("ratings table was dropped...")
        });
    }
};
exports.genre_list={
    create: function(){
        connect.conn.connect.query('create table genre_list(\n' +
            '    id INT AUTO_INCREMENT PRIMARY KEY ,\n' +
            '    genre_text VARCHAR(255) NOT NULL\n' +
            ');',function (err,result) {
            if (err) throw err;
            console.log("genre_list table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS genre_list',function(err,result)
        {
            if (err) throw err;
            console.log("genre_list table was dropped...")
        });
    }
};
exports.genre_links={
    create: function(){
        connect.conn.connect.query('create table genre_links(\n' +
            '  movie_id INT NOT NULL,\n' +
            '  genre_id INT NOT NULL,\n' +
            '  FOREIGN KEY(movie_id) REFERENCES movies(id),\n' +
            '  FOREIGN KEY(genre_id) REFERENCES genre_list(id)\n' +
            ');',function (err,result) {
            if (err) throw err;
            console.log("genre_links table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS genre_links',function(err,result)
        {
            if (err) throw err;
            console.log("genre_links table was dropped...")
        });
    }
};
exports.likes={
    create: function(){
        connect.conn.connect.query('create table likes(\n' +
            '  user_id INT NOT NULL,\n' +
            '  comment_id INT NOT NULL,\n' +
            '  FOREIGN KEY(user_id) REFERENCES users(id),\n' +
            '  FOREIGN KEY(comment_id) REFERENCES comments(id)\n' +
            // '  PRIMARY KEY(user_id,comment_id)\n'+
            ');',function (err,result) {
            if (err) throw err;
            console.log("likes table was created...");
        })
    },
    drop: function(){
        connect.conn.connect.query('DROP TABLE IF EXISTS likes',function(err,result)
        {
            if (err) throw err;
            console.log("likes table was dropped...")
        });
    }
};


