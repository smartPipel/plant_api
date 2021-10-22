const express = require('express');
const plantControllers = require('../controllers/plantControllers');
const router = express.Router();

// POST Routes
router.post('/', plantControllers.uploadImage, plantControllers.newPlant);

// GET Routes
router.get('/', plantControllers.getAllPlant);
router.get('/:id', plantControllers.getPlantById);
router.get('/type/:plantType', plantControllers.getPlantByType);

// PATCH Routes
router.patch('/', plantControllers.updatePlant);

// DELETE Routes
router.delete('/:id', plantControllers.deletePlant);
router.delete('/', plantControllers.deleteAllPlant);



module.exports = router;