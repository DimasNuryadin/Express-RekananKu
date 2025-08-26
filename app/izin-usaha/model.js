const mongoose = require('mongoose');

const izinUsahaSchema = mongoose.Schema({
  jenisIzin: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  noSurat: {
    type: String,
    require: [true, "No surat harus diisi!"]
  },
  berlakuSampai: {
    type: String,
    require: [true, "Alamat harus diisi!"]
  },
  instansiPemberi: {
    type: String,
    require: [true, "Saham harus diisi!"]
  }
})

module.exports = mongoose.model('IzinUsaha', izinUsahaSchema);