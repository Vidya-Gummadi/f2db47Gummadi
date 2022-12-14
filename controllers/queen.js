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

 // VIEWS 
// Handle a show all view 
exports.queen_view_all_Page = async function(req, res) { 
    try{ 
        theQueens = await Queen.find(); 
        res.render('queen', { title: 'Queen Search Results', results: theQueens }); 
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
// Handle Costume create on POST. 
exports.queen_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Queen(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.age = req.body.age; 
    document.place = req.body.place; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE. 
//exports.queen_delete = function(req, res) { 
 //   res.send('NOT IMPLEMENTED: Queen delete DELETE ' + req.params.id); 
//}; 
 
// Handle Costume update form on PUT. 
exports.queen_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Queen.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.age) toUpdate.age = req.body.age;
    if(req.body.place) toUpdate.place = req.body.place;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
  
}; 
// Handle Costume delete on DELETE. 
exports.queen_delete = async function(req, res) { 
    console.log("delete "  + req.query.id) 
    try { 
        console.log("id" + req.query)
        result = await Queen.findByIdAndDelete( req.query.id) 
        res.render('queendelete', { title: 'Queen Delete', toShow: result }); 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.queen_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Queen.findById( req.query.id) 
        res.render('queendetail',  
{ title: 'Queen Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.queen_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('queencreate', { title: 'Queen Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.queen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Queen.findById(req.query.id) 
        res.render('queenupdate', { title: 'Queen Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 