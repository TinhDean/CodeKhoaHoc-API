var express = require('express');
var router = express.Router();
const controller = require('../controllers/itemsController');

// router.get('/list', controller.list);

// router.get('/add', controller.showAdd);
// router.post('/add', controller.add);

// router.get('/edit/:id', controller.showEdit);
// router.post('/edit/:id', controller.update);

// router.get('/delete/:id', controller.delete);

// API JSON ROUTES
router.get('/', controller.apiList);
router.post('/', controller.apiAdd);
router.put('/:id', controller.apiUpdate);
router.delete('/:id', controller.apiDelete);


module.exports = router;



