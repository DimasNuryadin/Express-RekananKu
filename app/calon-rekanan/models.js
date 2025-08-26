const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  id: {
    type: String,
    require: [true, 'id harus diisi']
  },
  status: {
    type: String,
    require: [true, "Review harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
})

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);