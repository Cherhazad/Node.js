const express = require('express');
const router = express.Router();
const controller = require('../controller/gameController')


router.get('/', controller.getAll)
router.post('/play/:action', controller.store)
router.get('/score', controller.getScore)
router.put('/:id', controller.update)
router.delete('/:id', controller.destroy)

module.exports = router