const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  id: {
    type: String,
    require: [true, 'id harus diisi']
  },
  status: {
    type: String,
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review',
    require: [true, "Review harus diisi!"]
  }
})

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);