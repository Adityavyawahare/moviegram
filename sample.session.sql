drop table users;
drop table movies;
drop table comments;
drop table photos;
drop table genre_list;
drop table genre_links;
drop table likes;
create table users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    number VARCHAR(255) UNIQUE NOT NULL,
     email VARCHAR(255) UNIQUE NOT NULL,
     password VARCHAR(255) UNIQUE NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
     );

create table movies(
    id VARCHAR(15) PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    imdb VARCHAR(20) NOT NULL,
    time VARCHAR(20) NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
);

create table comments(
        id INT AUTO_INCREMENT PRIMARY KEY ,
        comment_text VARCHAR(300) NOT NULL,
        user_id INT NOT NULL,
        movie_id VARCHAR(15) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(movie_id) REFERENCES movies(id)
        );

create table photos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    movie_id VARCHAR(15) NOT NULL,
    FOREIGN KEY(movie_id) REFERENCES movies(id)
    );

create table ratings(
    user_id INT NOT NULL,
    movie_id VARCHAR(15) NOT NULL,
    comment_id INT NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(movie_id) REFERENCES movies(id),
    FOREIGN KEY(comment_id) REFERENCES comments(id)
    );

create table genre_list(
    id INT AUTO_INCREMENT PRIMARY KEY ,
    genre_text VARCHAR(255) NOT NULL
    );

create table genre_links(
    movie_id VARCHAR(15) NOT NULL,
    genre_id INT NOT NULL,
    FOREIGN KEY(movie_id) REFERENCES movies(id),
    FOREIGN KEY(genre_id) REFERENCES genre_list(id)
    );

create table likes(
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(comment_id) REFERENCES comments(id)
    PRIMARY KEY(user_id,comment_id)
    );
INSERT INTO movies(id,name,imdb,time) VALUES(
    'tt0993846', 'The Wolf of Wall Street', 8.2, '180 min'
)
-- SHOW databases;
-- INSERT INTO movies(id,name,imdb,time) VALUES
--     ( 'tt9620292', 'Promising Young Woman', 7.4, '113 min' ),
--     ( 'tt10451914', 'Outside the Wire', 7.9, '114 min' ),
--     ( 'tt9130508', 'Cherry', 0, 'N/A' );
--     [ 'tt10612922', 'One Night in Miami', 7.3, '114 min' ],
--     [ 'tt2948372', 'Soul', 8.1, '100 min' ],
--     [ 'tt7126948', 'Wonder Woman 1984', 5.5, '151 min' ],
--     [ 'tt6878306', 'News of the World', 6.9, '118 min' ],
--     [ 'tt6723592', 'Tenet', 7.5, '150 min' ],
--     [ 'tt10579952', 'Master', 7.7, '179 min' ],
--     [ 'tt11161474', 'Pieces of a Woman', 7.1, '126 min' ],
--     [ 'tt11456054', 'Run Hide Fight', 7.7, '109 min' ],
--     [ 'tt5034838', 'Godzilla vs. Kong', 0, 'N/A' ],
--     [ 'tt0993846', 'The Wolf of Wall Street', 8.2, '180 min' ],
--     [ 'tt6751668', 'Parasite', 8.6, '132 min' ],
--     [ 'tt6571548', 'The White Tiger', 6.6, '125 min' ],
--     [ 'tt0293429', 'Mortal Kombat', 0, 'N/A' ],
--     [ 'tt9691136', 'Shadow in the Cloud', 4.7, '83 min' ],
--     [ 'tt1160419', 'Dune', 0, 'N/A' ],
--     [ 'tt0111161', 'The Shawshank Redemption', 9.3, '142 min' ],
--     [ 'tt5363618', 'Sound of Metal', 7.8, '120 min' ],
--     [ 'tt0087538', 'The Karate Kid', 7.3, '126 min' ],
--     [ 'tt13061914', 'Lockdown', 0, 'N/A' ],
--     [ 'tt9686708', 'The King of Staten Island', 7.1, '136 min' ],
--     [ 'tt11286314', "Don't Look Up", 0, 'N/A' ],
--     [ 'tt4154796', 'Avengers: Endgame', 8.4, '181 min' ],
--     [ 'tt10288566', 'Another Round', 7.8, '117 min' ],
--     [ 'tt2382320', 'No Time to Die', 0, '163 min' ],
--     [ 'tt6902332', 'The Marksman', 6, '108 min' ],
--     [ 'tt9770150', 'Nomadland', 7.7, '108 min' ],
--     [ 'tt9016974', 'Synchronic', 6.5, '102 min' ],
--     [ 'tt8367814', 'The Gentlemen', 7.8, '113 min' ],
--     [ 'tt10334148', 'Blithe Spirit', 5.4, '95 min' ],
--     [ 'tt10016180', 'The Little Things', 0, '127 min' ],
--     [ 'tt9893250', 'I Care a Lot', 7.4, '118 min' ],
--     [ 'tt10600398', 'We Can Be Heroes', 4.7, '100 min' ],
--     [ 'tt9608818', 'Our Friend', 7.2, '124 min' ],
--     [ 'tt10886166', '365 Days', 3.3, '114 min' ],
--     [ 'tt10539608', 'The Midnight Sky', 5.6, '118 min' ],
--     [ 'tt9794630', 'The Vanished', 5.8, '95 min' ],
--     [ 'tt8946378', 'Knives Out', 7.9, '130 min' ]
--   ]
-- ]