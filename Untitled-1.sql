-- INSERT INTO photos(image_url,movie_id) VALUES
-- ('https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg', 'tt10451914')
-- create table movies(
-- id VARCHAR(15) PRIMARY KEY,name VARCHAR(300) NOT NULL,imdb DECIMAL(2,1) NOT NULL,
-- time VARCHAR(20) NOT NULL,created_at TIMESTAMP DEFAULT NOW());

SELECT rating,comments.id,name,comment_text,comments.created_at from
comments left join ratings on comments.id = ratings.comment_id left join likes on likes.comment_id = comments.id inner join users
on users.id = comments.user_id  where comments.movie_id='tt0087538' group by comments.id ORDER BY
comments.created_at DESC;

select count(*) from likes where comment_id=501;

SELECT rating,comments.id,name,comment_text,(select count(*) from likes where comment_id=comments.id) as likes,comments.created_at from
comments left join ratings on comments.id = ratings.comment_id left join likes on 
likes.comment_id = comments.id inner join users on users.id = comments.user_id 
where comments.movie_id='tt0087538' group by comments.id ORDER BY
comments.created_at DESC;

-- 'select image_url,name,imdb,genre_links.movie_id,movies.id as id from movies \n' +
--             'inner join photos on photos.movie_id=movies.id inner join genre_links on movies.id=genre_links.movie_id \n' + '' +
--             'inner join genre_list on genre_links.genre_id = genre_list.id' +
--             q + ' order by movies.imdb ' + data.sort + ';'