const express = require('express');
const plantControllers = require('../controllers/plantControllers');
const router = express.Router();


router.post('/', plantControllers.uploadImage, plantControllers.newPlant);
router.get('/', plantControllers.getAllPlant);
router.get('/:id', plantControllers.getPlantById);
router.get('/type/:plantType', plantControllers.getPlantByType);
router.patch('/', plantControllers.updatePlant);
router.delete('/', plantControllers.deletePlant);



module.exports = router;