const express = require('express');
const { protect, adminOnly } = require('../middleware/authMiddleware');
const { getProfile, updateProfile, deleteProfile, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.delete('/profile', protect, deleteProfile);
router.get('/', protect, adminOnly, getAllUsers);

module.exports = router;
