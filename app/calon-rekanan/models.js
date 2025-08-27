const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, 'userId harus diisi']
  },
  status: {
    type: String,
    require: [true, "Status rekanan harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
})

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);