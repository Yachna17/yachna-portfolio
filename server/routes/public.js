const express = require('express')
const router = express.Router()
const skillController = require('../controllers/skillController')
const projectController = require('../controllers/projectController')
const contactController = require('../controllers/contactController')
const { contactLimiter } = require('../middleware/rateLimiter')

router.get('/skills', skillController.getAll)
router.get('/projects', projectController.getAll)
router.post('/contact', contactLimiter, contactController.send)

// Test route commented out for now
// router.get('/test', (req, res) => {
//   res.json({ message: 'API is working' })
// })

module.exports = router