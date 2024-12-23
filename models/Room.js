const mongoose = require('mongoose'); 
 
const roomSchema = new mongoose.Schema({ 
  name: { type: String, required: true }, 
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Device' }], 
}, { timestamps: true }); 
 
module.exports = mongoose.model('Room', roomSchema); 
 