const mongoose = require('mongoose');

const pemilikSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "userId harus diisi!"]
  },
  nama: {
    type: String,
    require: [true, "Nama harus diisi!"]
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
    require: [true, "Alamat harus diisi!"]
  },
  saham: {
    type: Number,
    require: [true, "Saham harus diisi!"]
  }
})

module.exports = mongoose.model('Pemilik', pemilikSchema);