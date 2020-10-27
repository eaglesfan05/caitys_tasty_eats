const express = require('express');
const router = express.Router()
const path = require('path')


router.get('/thankyou', (req, res) => {
    res.sendFile(path.join(__dirname, '/thankyou.html'))
})

module.exports = router