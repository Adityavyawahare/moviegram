var faker=require('faker');
var use=require('../models/moviesTable');
var users=require('../models/usersTable');
var photos=require('../models/photosTable');
var genre=require('../models/genresTable');
var comments=require('../models/commentsTable');
var likes=require('../models/likesTable')
var ratings=require('../models/ratingsTable')
var unirest = require('unirest');
var arr=["tt10451914","tt9620292","tt9130508","tt10612922","tt2948372","tt6878306","tt7126948","tt0293429","tt6723592","tt11456054",
"tt10579952","tt5034838","tt11161474","tt13061914","tt6571548","tt0087538","tt6902332","tt10600398","tt9016974","tt9686708",
"tt9794630","tt10016180","tt4154796","tt10539608","tt9770150","tt9608818","tt9893250","tt10288566","tt10886166","tt10334148",
"tt11286314","tt2382320","tt5363618","tt8367814","tt6751668","tt0993846","tt8946378","tt9691136","tt1160419","tt0111161"
]
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
    movies: async function() {
        //fake data in movies
        var data_v=[
            [ 'tt10451914', 'Outside the Wire', 7.9, '114 min' ],
            [ 'tt10579952', 'Master', 7.7, '179 min' ],
            [ 'tt11456054', 'Run Hide Fight', 7.7, '109 min' ],
            [ 'tt10600398', 'We Can Be Heroes', 4.7, '100 min' ],
            [ 'tt9893250', 'I Care a Lot', 7.4, '118 min' ],
            [ 'tt9016974', 'Synchronic', 6.5, '102 min' ],
            [ 'tt10288566', 'Another Round', 7.8, '117 min' ],
            [ 'tt8946378', 'Knives Out', 7.9, '130 min' ],
            [ 'tt8367814', 'The Gentlemen', 7.8, '113 min' ],
            [ 'tt9620292', 'Promising Young Woman', 7.4, '113 min' ],
            [ 'tt6878306', 'News of the World', 6.9, '118 min' ],
            [ 'tt0293429', 'Mortal Kombat', 0, 'N/A' ],
            [ 'tt10612922', 'One Night in Miami', 7.3, '114 min' ],
            [ 'tt7126948', 'Wonder Woman 1984', 5.5, '151 min' ],
            [ 'tt9130508', 'Cherry', 0, 'N/A' ],
            [ 'tt6902332', 'The Marksman', 6, '108 min' ],
            [ 'tt5034838', 'Godzilla vs. Kong', 0, 'N/A' ],
            [ 'tt11161474', 'Pieces of a Woman', 7.1, '126 min' ],
            [ 'tt2948372', 'Soul', 8.1, '100 min' ],
            [ 'tt6571548', 'The White Tiger', 6.6, '125 min' ],
            [ 'tt4154796', 'Avengers: Endgame', 8.4, '181 min' ],
            [ 'tt0087538', 'The Karate Kid', 7.3, '126 min' ],
            [ 'tt6723592', 'Tenet', 7.5, '150 min' ],
            [ 'tt9686708', 'The King of Staten Island', 7.1, '136 min' ],
            [ 'tt13061914', 'Lockdown', 0, 'N/A' ],
            [ 'tt9794630', 'The Vanished', 5.8, '95 min' ],
            [ 'tt9608818', 'Our Friend', 7.2, '124 min' ],
            [ 'tt10539608', 'The Midnight Sky', 5.6, '118 min' ],
            [ 'tt10016180', 'The Little Things', 0, '127 min' ],
            [ 'tt11286314', "Don't Look Up", 0, 'N/A' ],
            [ 'tt9770150', 'Nomadland', 7.7, '108 min' ],
            [ 'tt0993846', 'The Wolf of Wall Street', 8.2, '180 min' ],
            [ 'tt10886166', '365 Days', 3.3, '114 min' ],
            [ 'tt5363618', 'Sound of Metal', 7.8, '120 min' ],
            [ 'tt2382320', 'No Time to Die', 0, '163 min' ],
            [ 'tt6751668', 'Parasite', 8.6, '132 min' ],
            [ 'tt1160419', 'Dune', 0, 'N/A' ],
            [ 'tt10334148', 'Blithe Spirit', 5.4, '95 min' ],
            [ 'tt9691136', 'Shadow in the Cloud', 4.7, '83 min' ],
            [ 'tt0111161', 'The Shawshank Redemption', 9.3, '142 min' ]
          ];
          use.insert([data_v]);
        // async function auth(i) {
        //     var uni = unirest("GET", "http://www.omdbapi.com/?");
        //     const val= await uni.query({
        //         "i": arr[i],
        //         "plot":"full",
        //         "apikey":'9b728400'
        //         })
        //         .then((val) => {
        //             return new Promise((response,reject)=>{
        //                 response(val);
        //             })
        //           });
        //     return val;
        // }
        //     var data_v=[];
        //         for(let i=0;i<40;i++)
        //         {
        //             await auth().then((data)=>{
        //                 if (data.error) 
        //                 {
        //                     throw new Error(data.error);
        //                 }
        //                 var rate;
        //                 if(data.body.imdbRating=='N/A')
        //                 {
        //                     rate=0.0;
        //                 }
        //                 else{
        //                     rate=parseFloat(parseFloat(data.body.imdbRating))
        //                 }
        //                 data_v.push([
        //                     data.body.imdbID,
        //                     data.body.Title,
        //                     rate,
        //                     data.body.Runtime
        //                 ]);
        //                 x++;
        //                 if(x==39)
        //                 {
        //                     use.insert(data_v)
        //                 }
        //             })
        //         }
    },
    photos:
    // var data_v=[
    //     [
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNmM2MWQ0NzktNzU0OS00MjYzLTkxNDYtMzliNTA5ZmNkMmZlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    //           'tt10451914'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZDViMzBiNGMtZTIyNS00NzI4LWE3NDMtNmM1NDk0NzBlMWRlXkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_SX300.jpg',
    //           'tt9620292'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BOWE1Njc4MzUtZWVhNy00YjVkLTgyY2MtYWY3OWI0NzE2MmZmXkEyXkFqcGdeQXVyMTEyODAwMDg0._V1_SX300.jpg',
    //           'tt9130508'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYmJlYWQ0NWMtMzU5Ni00MDNhLTk2YmUtYWYzZTJhMDMxMzE0XkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_SX300.jpg',
    //           'tt10612922'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg',
    //           'tt2948372'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMDNlNmVlNDItMjE3Yi00ZTA3LWIyOTktNDhhMGFlZjk5ZDQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    //           'tt6878306'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNWY2NWE0NWEtZGUwMC00NWMwLTkyNzUtNmIxMmIyYzA0MjNiXkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_SX300.jpg',
    //           'tt7126948'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BY2VkZTcxM2QtMTYyNi00YzA5LTlmMWMtNDYzOTIxMzQ2MjczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    //           'tt0293429'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg',
    //           'tt6723592'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNDY3NzBjY2MtM2ExYi00MzY2LWE4NDAtOTNlZmVlN2E5ZjYwXkEyXkFqcGdeQXVyNjg2NzQ5Njg@._V1_SX300.jpg',
    //           'tt11456054'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_SX300.jpg',
    //           'tt10579952'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNjM5OWFmNjMtYzBlZi00MGZiLWFkMmUtNGFmMjUzMzhhYTYxXkEyXkFqcGdeQXVyMTM1NjgyNDI@._V1_SX300.jpg',
    //           'tt5034838'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMGE3MzMzOTAtOTExMy00MzFiLWFjNDItN2ZiZmYyYjY2MWUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    //           'tt11161474'
    //         ],
    //         [ 'N/A', 'tt13061914' ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMDVkMDRkMzItN2EyYS00ZTI5LTljYzgtNzRmZDQ0OTQ3M2VjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    //           'tt6571548'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    //           'tt0087538'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BODdlNThhMTUtNmU1OS00ZjM3LWE1ZjMtOWViN2RhYWRiZTg5XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    //           'tt6902332'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    //           'tt10600398'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYWVlNjUxNzctZTI3NC00MDMzLWFlMjAtYmI2NWE5ZWJhYjZmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    //           'tt9016974'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYzkxMzMzOTgtNmZhMS00MGM0LTk3MzUtMjE1MzI4MzU5ZjkzXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg',
    //           'tt9686708'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYmU0MWZhNmQtOGQ4MC00ZTVlLTkwMTctYzBiY2Q1ZjQyYWJmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    //           'tt9794630'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BOGFlNTdmYWQtM2IzMi00YTY3LTlmMDQtZDI5NGQ5MjYzZmEwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
    //           'tt10016180'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    //           'tt4154796'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNDQwYjJjODMtOWNmNC00NDJjLThiNDgtNzVkOTM1MjY5NDQ5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    //           'tt10539608'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZTJjYTcwZjEtMzdmOS00OTVjLWEwM2UtYzEyN2I3N2VkYmY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    //           'tt9770150'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZjQxOTY2MzYtZjhhNy00Y2ExLWJiMWYtYTNkMzA2ZTk5MDU4XkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_SX300.jpg',
    //           'tt9608818'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNmIwM2ZmMjEtMDE4My00ZTY1LWIxNGMtNTQ3NmVjZmE4YjQwXkEyXkFqcGdeQXVyODcxMjk3MjQ@._V1_SX300.jpg',
    //           'tt9893250'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_SX300.jpg',
    //           'tt10288566'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BODljZTM3ODAtMDc0YS00NmI4LTlmZTUtM2I5MDAzNTQxZmMxXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_SX300.jpg',
    //           'tt10886166'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZjhjNjVmNGYtOTU2MC00ZTJlLTg5ZjMtNDk5MjZmYmVhMWEyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    //           'tt10334148'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BZmUwNzcyYmMtYmU0ZC00MzllLTgzZDgtZTBlYTM2MjQ3NzE5XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg',
    //           'tt11286314'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYmQ3MTY4NDUtOWExZi00OGQxLTgzNmQtODI1MTFkZjMyMDY0XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg',
    //           'tt2382320'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
    //           'tt5363618'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg',
    //           'tt8367814'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    //           'tt6751668'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
    //           'tt0993846'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg',
    //           'tt8946378'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BNWNiNGQyMzUtN2VmMi00NDI2LWI3NGUtMTEwZGQxYzFjZTNjXkEyXkFqcGdeQXVyMTEyNDk3MjY3._V1_SX300.jpg',
    //           'tt9691136'
    //         ],
    //         [
    //           'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_SX300.jpg',
    //           'tt1160419'
    //         ]
    //       ]
    // ]   
    async function(){
        var data_v=[];
        for(let i=0;i<40;i++) {
            var uni = unirest("GET", "http://www.omdbapi.com/?");

            await uni.query({
            "i": arr[i],
            "plot":"full",
            "apikey":'9b728400'
            });
            await uni.end(function (data) {
                if (data.error) 
                {
                    throw new Error(data.error);
                }
            data_v.push([
                data.body.Poster,
                data.body.imdbID
            ])
            if(i==39)
            {
                 photos.insert([data_v]);
            }
        })

    }
},
    comments: function(){
        var data=[];
        for(var i=1;i<=500;i++) {
            data.push([
                faker.commerce.productDescription(),
                faker.random.number({'min':1,'max':400}),
                arr[faker.random.number({'min':0,'max':39})],
                faker.date.past()
            ])}
        comments.insert([data]);
    },
    genre:async function(){
        // var data=[];
        // data.push(['horror']);
        // data.push(['thriller']);
        // data.push(['comedy']);
        // console.log('creating fake genres');
        // genre.insert_genre([data]);

        // var data=[];
        // for(var i=0;i<30;i++) {
        //     data.push([
        //         arr[i],
        //         faker.random.number({'min':1,'max':3})
        //     ])}
        // genre.insert_genre_link([data]);
        async function auth(i) {
            var uni = unirest("GET", "http://www.omdbapi.com/?");
            const val= await uni.query({
                "i": arr[i],
                "plot":"full",
                "apikey":'9b728400'
                })
                .then((val) => {
                    return new Promise((response,reject)=>{
                        response(val);
                    })
                  });
            return val;
        }
        for(let i=0;i<40;i++) {
            var v=[];
            await auth(i).then(async function (data) {
                if (data.error) 
                {
                    throw new Error(data.error);
                }
                var s=data.body.Genre;
                v=s.split(",");
                // return new Promise((resolve,reject)=>{
                //     resolve(v);
                // }))
                for (let j=0;j<v.length;j++)
                {
                    let x=v[j];
                    x=x.trim();
                    var d=await genre.find(x)
                    if(d==-1)
                        {
                            await genre.insert_genre([[[x]]])
                                const c= await genre.find(x)
                                let a=[]
                                a.push([arr[i],
                                    c
                                    ])
                                await genre.insert_genre_link([a]);                            
                            }  
                        else{
                            let a=[]
                                a.push([arr[i],
                                    d
                                ])
                                await genre.insert_genre_link([a]);
                        }
                }
            })                 
    }
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
                arr[faker.random.number({'min': 0, 'max': 39})],
                i,
                faker.finance.amount(0, 9.9, 1)
            ])
        }
        ratings.insert([data],function () {

        });
    }
}