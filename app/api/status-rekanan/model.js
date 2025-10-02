const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  status: {
    type: String,
    require: [true, "Status rekanan harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
}, { timestamps: true })

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);