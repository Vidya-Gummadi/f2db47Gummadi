var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var queen_controller = require('../controllers/queen');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/queen', queen_controller.queen_create_post);
// DELETE request to delete Costume.
router.delete('/queen/:id', queen_controller.queen_delete);
// PUT request to update Costume.
router.put('/queen/:id', queen_controller.queen_update_put);
// GET request for one Costume.
router.get('/queen/:id', queen_controller.queen_detail);
// GET request for list of all Costume items.
router.get('/queen', queen_controller.queen_list);
module.exports = router;