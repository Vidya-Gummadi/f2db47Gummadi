//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('queen', { title: 'Search Results queen' });
//});

//module.exports = router;
var express = require('express'); 
const queen_controlers= require('../controllers/queen'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', queen_controlers.queen_view_all_Page ); 
module.exports = router; 