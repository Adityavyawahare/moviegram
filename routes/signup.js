var express = require('express');
var router = express.Router();

let form=require('../control/form');

/* GET users listing. */
router.get('/', form.signup_get);
router.post('/',form.signup_post);

module.exports = router;