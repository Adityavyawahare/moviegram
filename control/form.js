let users=require('../models/usersTable')
let movies=require('../models/moviesTable')
let comments=require('../models/commentsTable')
let likes=require('../models/likesTable')
let ratings=require('../models/ratingsTable')
let createUsers=require('../migrations/CreateUsersTable')
let createTables=require('../migrations/CreateTables')
let fakes=require('../FakeData/FakeData');
let app=require('../app')


//create users table for manipulation
createTables.likes.drop();
createTables.genre_links.drop();
createTables.genre_list.drop();
createTables.photos.drop();
createTables.ratings.drop();
createTables.comments.drop();
createUsers.users.drop();
createUsers.users.create();
//create rest of the tables for manipulation
createTables.movies.drop();
createTables.movies.create();
createTables.comments.create();
createTables.photos.create();
createTables.ratings.create();
createTables.genre_list.create();
createTables.genre_links.create();
createTables.likes.create();
console.log('creating fake movies...')
fakes.insertIn.movies();
console.log('creating fake users...')
fakes.insertIn.users();
console.log('creating fake photos...')
fakes.insertIn.photos();
console.log('creating fake genres...')
fakes.insertIn.genre();
console.log('creating fake comments...')
fakes.insertIn.comments();
console.log('creating fake likes...')
fakes.insertIn.likes();
console.log('creating fake ratings...')
fakes.insertIn.ratings();
//var to store the current user
var cur_movie_id;
var user_id;
var cur_movie_name;
//to display the form
exports.home=function(req, res, next) {
    res.render('index', {title: 'Moviegram'});
}
//on submitting the form
exports.submit=function(req, res, next) {
    var data = {
        email: req.body.email,
        password: req.body.password
    };

    //inserting data into the database
    users.find(data,function(value)
    {
        if(value==0)
        {
            //then redirecting to home page
            console.log('The password is incorrect')
            res.redirect('/');
        }
        else
        {
            console.log('The password is correct')
            users.get_id(data,function (value) {
              user_id=value[0].id;
            })
            res.redirect('/movies');
        }
    });
}
//to display the data
exports.display=function(req,res,next){
    console.log(users);
    var count;
    users.count(function(result){
        count=result;
        console.log(count);
    });
    var data;
    users.display(function(result){
        data=result;
        res.render('display', {title: 'Moviegram',data:data,count:count});
    });
}
//displaying the signup page
exports.signup_get=function(req, res, next) {
    res.render('signup', {title: 'Moviegram'});
}
exports.signup_post=function(req, res, next) {
    var data = [
        req.body.name,
        req.body.phone_number,
        req.body.email,
        req.body.password,
        new Date().toISOString().slice(0, 19).replace('T', ' ')
    ];
    console.log([[data]]);
    users.insert([[data]]);
    res.redirect('/');
}
exports.movies_get=function(req,res,next){
    movies.display_movies_and_images(function(value)
    {
        res.render('movies', {title: 'Moviegram',movies:value});
    });
}
exports.movies_post=function(req,res,next){
    var data= {
        genre:req.body.genre,
        imdb:req.body.imdb,
        sort:req.body.sort
    };
    console.log(data);
    movies.find_filter(data,function(result){
        res.render('movies',{title:'Moviegram',movies:result});
    });
}
exports.search_bar=function(req,res,next){
    movies.search(req.body.search,function (data) {
        res.render('movies',{title:'Moviegram',movies:data});
    })
}
exports.show_movie=function(req,res,next){
    var com;
    movies.find(req.params.movie_name,function(data){
        cur_movie_name=req.params.movie_name;
        console.log(req.params.movie_name);
        movies.get_id(req.params.movie_name,function (value) {
            cur_movie_id=value[0].id;
            comments.display(cur_movie_id,function (result) {
                com=result;
                movies.average_rating(cur_movie_id,function (avg) {
                    res.render('movie',{title:'Moviegram',movie_data:data,comment:com,average:avg})
                });
            })
        })
    });
}
exports.get_comment=function (req,res,next) {
    var data= [];
    var cur_comment_id;
    data.push([
        req.body.input_comment,
        user_id,
        cur_movie_id,
        new Date().toISOString().slice(0, 19).replace('T', ' ')
    ])
    console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
    var rate=[];
    comments.insert([data]);
    comments.get_id({user_id:user_id,movie_id:cur_movie_id},function(x){
        cur_comment_id=x;
        rate.push([
            user_id,
            cur_movie_id,
            cur_comment_id,
            parseFloat(req.body.input_rating)
        ])
        ratings.insert([rate],function () {
            res.redirect('/movies/' + req.params.movie_name);
        });
    })
}

exports.add_like=function(req,res,next){
    var data=[];
    var val=0;
    data.push([
        user_id,
        req.body.comment_id
    ]);
    likes.insert([data]);

    likes.count(req.body.comment_id,function(value){
        val=value;
        res.send([val]);
    });
}
exports.order_by=function(req,res,next){
            var gg= {
                movie_id:cur_movie_id,
                value:req.body.value
            };
            comments.order_by(gg,function (result) {
                res.render('comments', {comment: result}, function (err, html) {
                    res.send(html);
                })
            })
}