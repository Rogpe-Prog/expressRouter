const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.get('/', controller.index)
router.get('/contacts', controller.contacts)
router.get('/about', controller.about)

module.exports = router