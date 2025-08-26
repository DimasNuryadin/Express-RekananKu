const mongoose = require('mongoose');

const izinUsahaSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "userId harus diisi!"]
  },
  jenisIzin: {
    type: String,
    require: [true, "Jenis izin harus diisi!"]
  },
  noSurat: {
    type: String,
    require: [true, "No surat harus diisi!"]
  },
  berlakuSampai: {
    type: String,
    require: [true, "Berlaku harus diisi!"]
  },
  instansiPemberi: {
    type: String,
    require: [true, "Instansi pemberi harus diisi!"]
  }
})

module.exports = mongoose.model('IzinUsaha', izinUsahaSchema);