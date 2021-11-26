const express = require('express');
const plantControllers = require('../controllers/plantControllers');
const router = express.Router();

// POST Routes
router.post('/', plantControllers.uploadImage, plantControllers.newPlant);

// GET Routes
router.get('/', plantControllers.getAllPlant);
router.get('/id=:id', plantControllers.getPlantById);
router.get('/plant-type=:plantType', plantControllers.getPlantByType);
router.get('/search=:search', plantControllers.search);

// PATCH Routes
router.patch('/id=:id', plantControllers.updatePlant);

// DELETE Routes
router.delete('/id=:id', plantControllers.deletePlant);
router.delete('/delete-all', plantControllers.deleteAllPlant);



module.exports = router;