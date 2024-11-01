const express = require('express'); 
const { toggleDevice } = require('../controllers/deviceController'); 
const authMiddleware = require('../middleware/authMiddleware'); 
const router = express.Router(); 
 
router.put('/:id/toggle', authMiddleware, toggleDevice); 
 
module.exports = router; 
