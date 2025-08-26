const mongoose = require('mongoose');

const izinUsahaSchema = mongoose.Schema({
  jenisIzin: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  noSurat: {
    type: Number,
    require: [true, "KTP harus diisi!"],
    maxLength: [16, "Panjang ktp harus 16 karakter"],
    minLength: [16, "Panjang ktp harus 16 karakter"]
  },
  berlakuSampai: {
    type: String,
    require: [true, "Alamat harus diisi!"]
  },
  instansiPemberi: {
    type: Number,
    require: [true, "Saham harus diisi!"]
  }
})

module.exports = mongoose.model('IzinUsaha', izinUsahaSchema);