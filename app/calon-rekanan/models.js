const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, 'userId harus diisi'],
    unique: true
  },
  status: {
    type: String,
    require: [true, "Status rekanan harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
}, { timestamps: true })

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);