var express = require('express');
var router = express.Router();

let form=require('../control/form')

/* GET home page. */
router.get('/',form.home);
router.post('/',form.submit);
router.get('/movies',form.movies_get);
router.post('/movies',form.movies_post);
router.post('/search',form.search_bar);
router.post('/add_like',form.add_like);
router.post('/order_by',form.order_by);
router.get('/movies/:movie_id',form.show_movie);
router.post('/get_comment',form.get_comment);
router.get('/get_news',form.get_news)
router.get('/average_comments',form.get_average_and_comments)
module.exports = router;
