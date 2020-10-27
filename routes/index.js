const express = require('express');
const router = express.Router()
const path = require('path')
const sendMail = require('../mail')
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'))
})

// router.post('/email', (req, res) => {
//     const { name, email, subject, text} = req.body
// // send email
// sendMail(name, email, subject, text, function (err, data)  {
// if(err) {
//     res.status(500).json({ message: 'Server error'})
// } else {
//     res.json({ message: 'Sent'})
// }
// })
// })
module.exports = router;