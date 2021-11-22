const express = require('express');
const router = express.Router();


// GET Routes
router.get('/', (req, res) => {
    res.send(
        `
        <div style="margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      ">
                <h1>Welcome to plant api </h1>
        </div>
    `);
});




module.exports = router;