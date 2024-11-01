const User = require('../models/User'); 
 
// Get profile 
exports.getProfile = async (req, res) => { 
  try { 
    const user = await User.findById(req.user.id).select('-password'); 
    res.status(200).json(user); 
  } catch (err) { 
    res.status(500).json({ error: 'Error fetching profile' }); 
  } 
}; 
