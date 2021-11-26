const Plant = require('../models/plant');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadImage = multer({
    storage: storage
}).single('image')


const newPlant = (req, res, next) => {

    try {

        const plant = Plant.findOne({
            plantName: req.body.plantName
        }, (err, data) => {
            if (!data) {
                const newPlant = new Plant({
                    plantName: req.body.plantName,
                    descriptions: req.body.descriptions,
                    plantType: req.body.plantType,
                    image: req.file.path,
                    latinName: req.body.latinName,

                })
                newPlant.save((err, data) => {
                    return res.json(err ? {
                        success: false,
                        error: err
                    } : {
                        dataLength: data.length,
                        success: true,
                        data
                    })


                })
            } else {
                return res.json(err ? {
                    success: false,
                    message: `Something went wrong, please try again. ${err}`
                } : {
                    success: false,
                    message: 'Plant already exists'
                })

            }
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error
        })
    }



}

const getAllPlant = (req, res, next) => {
    Plant.find({}, (err, data) => {
        if (err) {
            return res.json({
                success: false,
                error: err
            })
        } else return res.json({
            dataLength: data.length,
            success: true,
            data
        })
    })

}

const getPlantById = (req, res, next) => {
    Plant.findOne({
        _id: req.params.id
    }, (err, data) => {
        if (err || !data) {
            return res.json({
                success: false,
                message: "Data doesn't exists"
            })
        } else return res.json({
            dataLength: data.length,
            success: true,
            data
        })
    })

}

const deletePlant = (req, res, next) => {
    Plant.deleteOne({
        _id: req.params.id
    }, (err, data) => {
        if (err || !data) {
            return res.json({
                success: false,
                message: "Data doesn't exists"
            })
        } else return res.json({
            dataLength: data.length,
            success: true,
            data
        })
    })

}

const updatePlant = (req, res, next) => {
    res.json({
        message: "UPDATE PLANTS"
    })
}
const deleteAllPlant = (req, res, next) => {
    Plant.deleteMany({}, err => {
        if (err) {
            return res.json({
                success: false,
                message: 'Complete delete failed!'
            })
        } else {
            return res.json({
                success: true,
                message: 'Complete delete successful!'
            })
        }
    });
}
const getPlantByType = (req, res, next) => {
    Plant.find({
        plantType: req.params.plantType
    }, (err, data) => {
        if (err || data.length === 0) {
            return res.json({
                success: false,
                message: "Data doesn't exists"
            })
        } else {
            return res.json({
                dataLength: data.length,
                success: true,
                data
            })
        }
    })
}


module.exports = {
    newPlant,
    deletePlant,
    getAllPlant,
    getPlantById,
    updatePlant,
    getPlantByType,
    uploadImage,
    deleteAllPlant
};