var Queen = require('../models/queen'); 
 
// List of all Costumes 
// List of all Costumes 
exports.queen_list = async function(req, res) { 
    try{ 
        theQueens = await Queen.find(); 
        res.send(theQueens); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// for a specific Costume. 
//exports.queen_detail = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Queen detail: ' + req.params.id); 
exports.queen_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Queen.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
 
// Handle Costume create on POST. 
exports.queen_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Queen create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.queen_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Queen delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.queen_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Queen update PUT' + req.params.id); 
}; 