/**
 * @apiDefine NotFoundError
 *
 * @apiError UserNotFound The Plant was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "success": false,
 *        "message": "Data doesn't exists"
 *     }
 */

/**
 * @apiDefine SystemError
 *
 * @apiError Bad Request.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *        "success": false,
 *        "message": "Something went wrong, please try again."
 *     }
 */

/**
 * @apiDefine ApiSuccessMessage
 * 
 * @apiSuccess {String} _id Id dari tanaman.
 * @apiSuccess {String} plantName  Nama tanaman.
 * @apiSuccess {String} descriptions  Deskripsi dari tanaman.
 * @apiSuccess {String} plantType  Tipe tanaman.
 * @apiSuccess {File} image  Gambar tanaman.
 * @apiSuccess {String} latinName  Nama latin tanaman.
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *   
 *   {
 *      "dataLength": 1,
 *      "success": true,
 *      "data": [
 *          {
 *              "_id": "6172b3d5017ab635160448eb",
 *              "plantName": "Singkong",
 *              "descriptions": "Tanaman ini juga sering dijadikan makanan pengganti beras karena kandungan serat dan vitaminnya cukup tinggi. Menanam singkong cukup mudah, anda hanya perlu menancapkan batang dari tanaman ini dan merawatnya. Cara ini dikenal nama perbanyakan vegetatif dengan menggunakan sistem strek. Umbi singkong akan tumbuh dibagian bawah. Saat panen anda harus mencabut tanaman ini. Singkong biasanya diolah menjadi beragam makanan. Bisa direbus, digoreng, dijadikan kue tradisional, atau dibuat menjadi tepung. Selain umbinya, palawija ini juga bisa dimanfaatkan daunnya. Daun singkong bisa diolah menjadi sayur atau makanan lain yang lezat.",
 *              "plantType": "Palawija",
 *              "image": "uploads/Singkong.jpeg",
 *              "latinName": "Manihot esculenta",
 *              "__v": 0
 *          },
 *      ]
 *  }
 *
 */


/** 
 * @api {get} /api/plant 1. Mendapatkan Semua Data Tanaman
 * @apiName GetPlant
 * @apiGroup Plant
 * @apiVersion 0.1.0
 * 
 *
 * @apiDescription Digunakan untuk mendapatkan semua data tanaman yang ada pada server.
 *
 *
 * @apiUse ApiSuccessMessage
 *
 * @apiUse NotFoundError
 */

/**
 * @api {get} /api/plant/id=:id 2. Mendapatkan data tanaman berdasarkan id
 * @apiName GetPlantByID
 * @apiGroup Plant
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} id Id dari tanaman.
 * 
 * @apiUse ApiSuccessMessage
 * 
 * @apiUse NotFoundError
 * 
 */

/**
 * @api {get} /api/plant/plant-type=:plantType 3. Mendapatkan data tanaman berdasarkan tipe
 * @apiName GetPlantByPlantType
 * @apiGroup Plant
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} plant-type Tipe dari tanaman.
 * 
 * @apiUse ApiSuccessMessage
 * 
 * @apiUse NotFoundError
 * 
 */

/**
 * @api {post} /api/plant 4. Menambah data tanaman
 * @apiName CreatePlant
 * @apiGroup Plant
 * @apiVersion 0.1.0
 * 
 * @apiBody {String} _id Id dari tanaman.
 * @apiBody {String} plantName  Nama tanaman.
 * @apiBody {String} descriptions  Deskripsi dari tanaman.
 * @apiBody {String} plantType  Tipe tanaman.
 * @apiBody {File} image  Gambar tanaman.
 * @apiBody {String} latinName  Nama latin tanaman.
 * 
 * @apiUse ApiSuccessMessage
 * 
 * @apiUse SystemError
 * 
 */

/**
 * @api {delete} /api/plant/id=:id 5. Delete data tanaman berdasarkan id
 * @apiName DeletePlant
 * @apiGroup Plant
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} _id Id dari tanaman.
 * 
 * @apiUse ApiSuccessMessage
 * 
 * @apiUse NotFoundError
 * 
 */