const User = require('../models/User'); 
const Role = require('../models/Role'); 
const jwt = require('jsonwebtoken'); 
 
// Signup 
exports.signup = async (req, res) => { 
  const { name, email, password, roleName } = req.body; 
  try { 
    const role = await Role.findOne({ name: roleName }); 
    if (!role) return res.status(400).json({ error: 'Invalid role' }); 
 
    const user = new User({ name, email, password, role: role._id }); 
    await user.save(); 
 
    res.status(201).json({ message: 'User registered' }); 
  } catch (err) { 
    res.status(500).json({ error: 'Error signing up' }); 
  } 
}; 
 
// Login 
exports.login = async (req, res) => { 
  const { email, password } = req.body; 
  try { 
    const user = await User.findOne({ email }).populate('role'); 
    if (!user || !(await user.comparePassword(password))) { 
      return res.status(401).json({ error: 'Invalid credentials' }); 
    } 
 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' }); 
    res.status(200).json({ token, user }); 
  } catch (err) { 
    res.status(500).json({ error: 'Error logging in' }); 
  } 
}; 
 