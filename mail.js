const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport')

var transport = nodemailer.createTransport({
    service: '',
    auth: {
        user: '',
        pass: ''
    }
})

var mailOptions = {
    from: '',
    to: '',
    subject: '',
    text: ``
}

transport.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error)
    } else {
        console.log('Email sent' + info.response)
    }
})
// const auth = {
//     auth: {
//         api_key: '774268be2c03e7df22f68914d19c56b0-9b1bf5d3-4c9cbb49',
//         domain: 'sandbox74c675f7cf184209a3eb8c37f0b962f3.mailgun.org'
//     }
// }

// const transporter = nodemailer.createTransport(mailGun(auth));

// // if name breaks remover
// const sendMail = (email, subject, text, cb) => {

//     const mailOptions = {
//         from: email,
        
//         to: 'khalilhall1221@gmail.com',
//         subject,
//         text
//     }
    
//     transporter.sendMail(mailOptions, function(err,data) {
//         if(err){
//             cb(err, null)
//         } else {
//             console.log("sent")
//             // cb(null, data)
//         }
//     })
// }

// module.exports = sendMail