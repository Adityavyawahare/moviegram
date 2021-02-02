-- INSERT INTO photos(image_url,movie_id) VALUES
-- ('https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg', 'tt10451914')
create table movies(
id VARCHAR(15) PRIMARY KEY,name VARCHAR(300) NOT NULL,imdb DECIMAL(2,1) NOT NULL,
time VARCHAR(20) NOT NULL,created_at TIMESTAMP DEFAULT NOW());