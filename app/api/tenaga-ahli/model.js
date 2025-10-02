const mongoose = require('mongoose');

const tenagaAhliSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id harus diisi!"],
    ref: 'Player'
  },
  nama: {
    type: String,
    required: [true, "Nama harus diisi!"]
  },
  alamat: {
    type: String,
    required: [true, "Alamat harus diisi!"]
  },
  pendidikanTerakhir: {
    type: String,
    required: [true, "Pendidikan terakhir harus diisi!"]
  },
  email: {
    type: String
  },
  profesiKeahlian: {
    type: String,
    required: [true, "Profesi keahlian harus diisi!"]
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
    required: [true, "NPWP harus diisi!"]
  },
  jenisKelamin: {
    type: String,
    enum: ["Pria", "Wanita"],
    required: [true, "Jenis kelamin harus diisi!"]
  },
  kewarganegaraan: {
    type: String,
  },
  pengalamanKerja: {
    type: Number,
    required: [true, "Pengalaman kerja harus diisi!"]
  },
  jabatan: {
    type: String,
    required: [true, "Jabatan harus diisi!"]
  },
  statusKepegawaian: {
    type: String,
    enum: ["Tetap", "Tidak Tetap"],
    required: [true, "Status kepegawaian harus diisi!"]
  }
}, { timestamps: true })

module.exports = mongoose.model('TenagaAhli', tenagaAhliSchema);