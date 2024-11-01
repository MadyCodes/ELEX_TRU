const Device = require('../models/Device'); 
 
// Toggle device state 
exports.toggleDevice = async (req, res) => { 
  const { id } = req.params; 
  try { 
    const device = await Device.findById(id); 
    if (!device) return res.status(404).json({ error: 'Device not found' }); 
 
    device.state = device.state === 'on' ? 'off' : 'on'; 
    await device.save(); 
 
    res.status(200).json({ message: 'Device state updated', device }); 
  } catch (err) { 
    res.status(500).json({ error: 'Error toggling device' }); 
  } 
}; 
 