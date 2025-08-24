const mongoose = require('mongoose');

const pemilikSchema = mongoose.Schema({
  nama: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  ktp: {
    type: String,
    require: [true, "KTP harus diisi!"],
    maxLength: [16, "Panjang ktp harus 16 karakter"],
    minLength: [16, "Panjang ktp harus 16 karakter"]
  },
  alamat: {
    type: String,
    require: [true, "KTP harus diisi!"]
  },
  saham: {
    type: String,
    require: [true, "KTP harus diisi!"]
  }
})

module.exports = mongoose.model('Pemilik', pemilikSchema);