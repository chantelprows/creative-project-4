var express = require('express');
var fs = require('fs');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root: 'public' });
});


router.get('/getfact', function(req, res, next) {
    var url = "https://cat-fact.herokuapp.com/facts"
    console.log("MADE IT HERE");
    request(url).pipe(res);
});



module.exports = router;
