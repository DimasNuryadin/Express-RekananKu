const mongoose = require('mongoose');

const izinUsahaSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  },
  jenisIzin: {
    type: String,
    required: [true, "Jenis izin harus diisi!"]
  },
  noSurat: {
    type: String,
    required: [true, "No surat harus diisi!"]
  },
  berlakuSampai: {
    type: String,
    required: [true, "Berlaku harus diisi!"]
  },
  instansiPemberi: {
    type: String,
    required: [true, "Instansi pemberi harus diisi!"]
  }
}, { timestamps: true })

module.exports = mongoose.model('IzinUsaha', izinUsahaSchema);