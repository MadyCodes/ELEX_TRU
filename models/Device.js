const mongoose = require('mongoose'); 
 
const deviceSchema = new mongoose.Schema({ 
  name: { type: String, required: true }, 
  type: { type: String, required: true }, 
  state: { type: String, enum: ['on', 'off'], default: 'off' }, 
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, 
}, { timestamps: true }); 
 
module.exports = mongoose.model('Device', deviceSchema); 
 