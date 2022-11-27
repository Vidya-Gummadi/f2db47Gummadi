var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('queen', { title: 'Search Results queen' });
});


var express = require('express'); 
const queen_controlers= require('../controllers/queen'); 
var     router = express.Router(); 
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET queen */ 
router.get('/create',secured, queen_controlers.queen_create_Page); 
router.get('/update',secured, queen_controlers.queen_update_Page); 
router.get('/delete',secured,queen_controlers.queen_delete); 
router.get('/detail', queen_controlers.queen_view_one_Page); 
router.get('/', queen_controlers.queen_view_all_Page ); 
module.exports = router; 