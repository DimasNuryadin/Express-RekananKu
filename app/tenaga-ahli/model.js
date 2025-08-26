const mongoose = require('mongoose');

const tenagaAhliSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "userId harus diisi!"]
  },
  nama: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  alamat: {
    type: String,
    require: [true, "Alamat harus diisi!"]
  },
  pendidikanTerakhir: {
    type: String,
    require: [true, "Pendidikan terakhir harus diisi!"]
  },
  email: {
    type: String
  },
  profesiKeahlian: {
    type: String,
    require: [true, "Profesi keahlian harus diisi!"]
  },
  ktp: {
    type: String,
    required: [true, "KTP harus diisi!"],
    unique: true,
    minLength: [16, "Panjang ktp harus 16 karakter"],
    maxLength: [16, "Panjang ktp harus 16 karakter"]
  },
  npwp: {
    type: String,
    require: [true, "NPWP harus diisi!"]
  },
  jenisKelamin: {
    type: String,
    enum: ["Pria", "Wanita"],
    require: [true, "Jenis kelamin harus diisi!"]
  },
  kewarganegaraan: {
    type: String,
  },
  pengalamanKerja: {
    type: Number,
    require: [true, "Pengalaman kerja harus diisi!"]
  },
  jabatan: {
    type: String,
    require: [true, "Jabatan harus diisi!"]
  },
  statusKepegawaian: {
    type: String,
    enum: ["Tetap", "Tidak Tetap"],
    require: [true, "Status kepegawaian harus diisi!"]
  }
})

module.exports = mongoose.model('TenagaAhli', tenagaAhliSchema);