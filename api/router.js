const express = require('express'),
    router = express.Router()

const indexController = require('./controllers/index')

router.route('/')
    .get(indexController.get)

module.exports = router