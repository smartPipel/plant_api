const Plant = require('../models/plant');
const mutler = require('multer');

const storage = mutler.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadImage = mutler({
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
                        error: err
                    } : {
                        status: "success",
                        data
                    })


                })
            } else {
                return res.json(err ? {
                    message: `Something went wrong, please try agein. ${err}`
                } : {
                    message: 'Plant already exists'
                })

            }
        })
    } catch (error) {
        console.log(error)
        return res.json({
            message: error
        })
    }



}

const getAllPlant = (req, res, next) => {
    Plant.find({}, (err, data) => {
        if (err) {
            return res.json({
                error: err
            })
        } else return res.json({
            message: 'success',
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
                message: "Data doesn't exists"
            })
        } else return res.json({
            message: 'success',
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
                message: "Data doesn't exists"
            })
        } else return res.json({
            message: 'seccess',
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
                message: 'Complete delete failed1'
            })
        } else {
            return res.json({
                message: 'Complete delete successful!'
            })
        }
    });
}
const getPlantByType = (req, res, next) => {
    Plant.find({
        plantType: req.params.plantType
    }, (err, data) => {
        if (err || !data) {
            return res.json({
                message: "Data doesn't exists"
            })
        } else return res.json({
            message: 'success',
            data
        })
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