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
    require: [true, "Jabatan harus diisi!"]
  },
  pendidikanTerakhir: {
    type: String,
    require: [true, "Pendidikan terakhir harus diisi!"]
  },
  profesiKeahlian: {
    type: String,
    require: [true, "Profesi keahlian harus diisi!"]
  },
  npwp: {
    type: String,
    require: [true, "NPWP harus diisi!"]
  },
  kewarganegaraan: {
    type: String,
    require: [true, "Kewarganegaraan harus diisi!"]
  },
  pengalamanKerja: {
    type: Number,
    require: [true, "Pengalaman kerja harus diisi!"]
  },
  statusKepegawaian: {
    type: String,
    require: [true, "Status kepegawaian harus diisi!"]
  }
})

module.exports = mongoose.model('TenagaAhli', tenagaAhliSchema);