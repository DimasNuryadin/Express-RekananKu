const mongoose = require('mongoose');

const pemilikSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id harus diisi"],
    ref: 'Player'
  },
  nama: {
    type: String,
    required: [true, "Nama harus diisi!"]
  },
  ktp: {
    type: String,
    required: [true, "KTP harus diisi!"],
    unique: true,
    minLength: [16, "Panjang ktp harus 16 karakter"],
    maxLength: [16, "Panjang ktp harus 16 karakter"]
  },
  alamat: {
    type: String,
    required: [true, "Alamat harus diisi!"]
  },
  saham: {
    type: Number,
    required: [true, "Saham harus diisi!"]
  }
}, { timestamps: true })

module.exports = mongoose.model('Pemilik', pemilikSchema);