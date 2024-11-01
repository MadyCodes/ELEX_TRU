const mongoose = require('mongoose'); 
 
const roleSchema = new mongoose.Schema({ 
  name: { type: String, required: true }, 
  permissions: { 
    canControlDevices: { type: Boolean, default: false }, 
    canViewDevices: { type: Boolean, default: true }, 
  }, 
}); 
 
module.exports = mongoose.model('Role', roleSchema); 
 