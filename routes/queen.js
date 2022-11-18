var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('queen', { title: 'Search Results queen' });
});


var express = require('express'); 
const queen_controlers= require('../controllers/queen'); 
var     router = express.Router(); 
 
/* GET costumes */ 
router.get('/create', queen_controlers.queen_create_Page); 
router.get('/update', queen_controlers.queen_update_Page); 
router.get('/delete', queen_controlers.queen_delete); 
router.get('/detail', queen_controlers.queen_view_one_Page); 
router.get('/', queen_controlers.queen_view_all_Page ); 
module.exports = router; 