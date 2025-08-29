const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  dataPerusahaan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DataPerusahaan'
  },
  status: {
    type: String,
    require: [true, "Status rekanan harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
}, { timestamps: true })

statusRekananSchema.path('user').validate(async function (value) {
  try {
    const count = await this.model('StatusRekanan').countDocuments({ user: value })
    return !count;
  } catch (err) {
    // throw err
    throw new Error(err)
  }
}, attr => `${attr.value} sudah terdaftar`)

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);