var faker=require('faker');
const imdb = require('imdb-api')
var use=require('../models/moviesTable');
var users=require('../models/usersTable');
var photos=require('../models/photosTable');
var genre=require('../models/genresTable');
var comments=require('../models/commentsTable');
var likes=require('../models/likesTable')
var ratings=require('../models/ratingsTable');
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
        //     '8669660564',
        //     'Aditya@gmail.com',
        //     'adiv',
        //     faker.date.past()
        // ])
        users.insert([data]);
    },
    movies:function(){
        var data=[];
        imdb.Movie
    }
}