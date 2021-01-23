var faker=require('faker');
var use=require('../models/moviesTable');
var users=require('../models/usersTable');
var photos=require('../models/photosTable');
var genre=require('../models/genresTable');
var comments=require('../models/commentsTable');
var likes=require('../models/likesTable')
var ratings=require('../models/ratingsTable')
exports.insertIn={
    users:function() {
        var data=[];
        for(var i=0;i<400;i++){
            data.push([
                faker.name.firstName()+" "+faker.name.lastName(),
                faker.phone.phoneNumberFormat(),
                faker.internet.email(),
                faker.internet.password(),
                faker.date.past()
            ])
        }
        // data.push([
        //     'Aditya Vyawahare',
        //     '8669660468',
        //     'Aditya@gmail.com',
        //     'adiv',
        //     faker.date.past()
        // ])
        users.insert([data]);
    },
    movies: function() {
        //fake data in movies
        var data=[];
        for(var i=0;i<30;i++) {
            data.push([
                    faker.random.words(),
                    faker.commerce.productDescription(),
                    faker.finance.amount(0, 9.9, 1),
                    faker.date.past()
                ])};
        use.insert([data]);},
    photos:function(){
        var data=[];
        for(var i=1;i<=30;i++) {
            data.push([
                faker.random.image(),
                i
            ])};
        photos.insert([data]);
    },
    comments: function(){
        var data=[];
        for(var i=1;i<=500;i++) {
            data.push([
                faker.commerce.productDescription(),
                faker.random.number({'min':1,'max':400}),
                faker.random.number({'min':1,'max':30}),
                faker.date.past()
            ])}
        comments.insert([data]);
    },
    genre:function(){
        var data=[];
        data.push(['horror']);
        data.push(['thriller']);
        data.push(['comedy']);
        console.log('creating fake genres');
        genre.insert_genre([data]);

        var data=[];
        for(var i=1;i<=30;i++) {
            data.push([
                i,
                faker.random.number({'min':1,'max':3})
            ])}
        genre.insert_genre_link([data]);
    },
    likes:function() {
        var data = [];
        for (var i = 1; i <= 1000; i++) {
            data.push([
                faker.random.number({'min': 1, 'max': 400}),
                faker.random.number({'min': 1, 'max': 500})
            ])
        }
        likes.insert([data]);
    },
    ratings:function(){
        var data = [];
        for (var i = 1; i <= 500; i++) {
            data.push([
                faker.random.number({'min': 1, 'max': 400}),
                faker.random.number({'min': 1, 'max': 30}),
                i,
                faker.finance.amount(0, 9.9, 1)
            ])
        }
        ratings.insert([data],function () {

        });
    }
}