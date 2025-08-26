const mongoose = require('mongoose');

const tenagaAhliSchema = mongoose.Schema({
  nama: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  ktp: {
    type: Number,
    require: [true, "KTP harus diisi!"],
    maxLength: [16, "Panjang ktp harus 16 karakter"],
    minLength: [16, "Panjang ktp harus 16 karakter"]
  },
  alamat: {
    type: String,
    require: [true, "Alamat harus diisi!"]
  },
  jabatan: {
    type: Number,
    require: [true, "Saham harus diisi!"]
  },
  pendidikanTerakhir: {
    type: String,
    require: [true, "Saham harus diisi!"]
  },
  profesiKeahlian: {
    type: String,
    require: [true, "Saham harus diisi!"]
  },
  npwp: {
    type: String,
    require: [true, "Saham harus diisi!"]
  },
  kewarganegaraan: {
    type: String,
    require: [true, "Saham harus diisi!"]
  },
  pengalamanKerja: {
    type: Number,
    require: [true, "Saham harus diisi!"]
  },
  statusKepegawaian: {
    type: String,
    require: [true, "Saham harus diisi!"]
  }
})

module.exports = mongoose.model('TenagaAhli', tenagaAhliSchema);