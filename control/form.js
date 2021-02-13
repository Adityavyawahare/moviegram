let users=require('../models/usersTable')
let movies=require('../models/moviesTable')
let comments=require('../models/commentsTable')
let likes=require('../models/likesTable')
let ratings=require('../models/ratingsTable')
let photos=require('../models/photosTable')
let genres=require('../models/genresTable')
let createUsers=require('../migrations/CreateUsersTable')
let createTables=require('../migrations/CreateTables')
let fakes=require('../FakeData/FakeData');
let app=require('../app')
var unirest = require('unirest');

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

        genres.get_filter((genre)=>{
            res.render('movies', {title: 'Moviegram',movies:value,genres_data:genre});
        })
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
        genres.get_filter((genre)=>{
            res.render('movies',{title:'Moviegram',movies:result,genres_data:genre});
        })
    });
}
exports.search_bar=async function(req,res,next){
    async function auth() {
        var uni = unirest("GET", "http://www.omdbapi.com/?");
        const val= await uni.query({
            "s": req.body.search,
            "apikey":'9b728400'
            })
            .then((val) => {
                if (val.error) 
                {
                    res.redirect('/movies');
                    throw new Error(data.error);
                }
                if (val===undefined) 
                {
                    res.redirect('/movies');
                }
                return new Promise((response,reject)=>{
                    response(val);
                })
              });
        return val;
    }
    async function auth2(i) {
        var uni = unirest("GET", "http://www.omdbapi.com/?");
        const val= await uni.query({
            "i":i,
            "apikey":'9b728400'
            })
            .then((val) => {
                if (val.error) 
                {
                    res.redirect('/movies');
                    throw new Error(data.error);
                }
                return new Promise((response,reject)=>{
                    response(val);
                })
              });
        return val;
    }
    var val=[];
    await auth().then(async function (data) {
        if (data.error) 
        {
            throw new Error(data.error);
        }
        var x=data.body.Search.length
        if(x>20){
            x=20
        }
        for(var i=0;i<x;i++)
        {
            await auth2(data.body.Search[i].imdbID).then(async function(lol){
                rating=parseFloat(lol.body.imdbRating);
                var x={
                    name: data.body.Search[i].Title,
                    image_url:data.body.Search[i].Poster,
                    imdb: rating,
                    id: data.body.Search[i].imdbID
                }
                console.log(x);
                val.push(x);  
            })
        }    
    });
    genres.get_filter((genre)=>{
        res.render('movies',{title:'Moviegram',movies:val,genres_data:genre});
    })
}
exports.show_movie=async function(req,res,next){
    var com;
    movies.find_if(req.params.movie_id,async function(gg){
        async function auth() {
            var uni = unirest("GET", "http://www.omdbapi.com/?");
            const val= await uni.query({
                "i": req.params.movie_id,
                "plot":"full",
                "apikey":'9b728400'
                })
                .then((val) => {
                    return new Promise((response,reject)=>{
                        if (val.error) 
                        {
                            res.redirect('/movies');
                            throw new Error(val.error);
                        }
                        response(val);
                    })
                  });
            return val;
        }
        await auth().then(async function (data) {
            console.log(gg);
            if(gg==0)
            {   
                var data_movies=[];
                data_movies.push([
                    req.params.movie_id,
                    data.body.Title,
                    parseFloat(data.body.imdbRating),
                    data.body.Runtime
                ])
                await movies.insert([data_movies])

                var data_image=[];
                data_image.push([
                    data.body.Poster,
                    req.params.movie_id
                ])
                await photos.insert([data_image]);

                var s=data.body.Genre;
                var arr=s.split(",");

                for (let j=0;j<arr.length;j++)
                {
                    let x=arr[j];
                    x=x.trim();
                    var d=await genres.find(x)
                    if(d==-1)
                        {
                            await genres.insert_genre([[[x]]])
                                const c= await genres.find(x)
                                let a=[]
                                a.push([req.params.movie_id,
                                    c
                                    ])
                                await genres.insert_genre_link([a]);                            
                            }  
                        else{
                            let a=[]
                                a.push([req.params.movie_id,
                                    d
                                ]);
                                await genres.insert_genre_link([a]);
                        }
                }
            }
                cur_movie_name=data.body.Title;
                cur_movie_id=req.params.movie_id;
                comments.display(cur_movie_id,function (result) {
                    com=result;
                    movies.average_rating(cur_movie_id,function (avg) {
                        res.render('movie',{title:'Moviegram',movie_data:data.body,comment:com,average:avg})
                    });
                })
            })
    });
}
exports.get_comment=function (req,res,next) {
    var data= [];
    var cur_comment_id;
    // if(user_id===undefined)
    // {
    //     res.redirect('/');
    // }
    data.push([
        req.body.input_comment,
        user_id,
        cur_movie_id,
        new Date().toISOString().slice(0, 19).replace('T', ' ')
    ])
    console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));
    console.log([data]);
    var rate=[];
    comments.insert([data],()=>{
        comments.get_id({user_id:user_id,movie_id:cur_movie_id},function(x){
            cur_comment_id=x;
            rate.push([
                user_id,
                cur_movie_id,
                cur_comment_id,
                parseFloat(req.body.input_rating)
            ]);
            console.log([rate]);
            ratings.insert([rate],function () {
                res.redirect('/movies/' + req.params.movie_id);
            });
        })
    });
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