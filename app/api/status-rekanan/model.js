const mongoose = require('mongoose');
let statusRekananSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id rekanan harus diisi!"],
    unique: true,
    ref: 'Player'
  },
  data_perusahaan: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Data perusahaan harus diisi!"],
    unique: true,
    ref: 'DataPerusahaan'
  },
  status: {
    type: String,
    required: [true, "Status rekanan harus diisi!"],
    enum: ['Review', 'Rekanan', 'Bukan Rekanan'],
    default: 'Review'
  }
}, { timestamps: true })

statusRekananSchema.path('user_id').validate(async function (value) {
  try {
    const count = await this.model('StatusRekanan').countDocuments({ user_id: value })
    return !count;
  } catch (err) {
    // throw err
    throw new Error(err)
  }
}, attr => `${attr.value} sudah terdaftar`)

module.exports = mongoose.model('StatusRekanan', statusRekananSchema);