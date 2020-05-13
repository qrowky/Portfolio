const express = require('express'),
    router = express.Router();

const indexController = require('./controllers/indexController'),
    nodemailer = require('./controllers/nodemaile')

router.route('/')
    .get(indexController.get)
    
router.route('/contact/post')
    .post(nodemailer.contactNodeMailer)

module.exports = router