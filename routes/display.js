var express = require('express');
var router = express.Router();

let form=require('../control/form');

/* GET users listing. */
router.get('/', form.display);

module.exports = router;