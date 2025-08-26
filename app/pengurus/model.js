const mongoose = require('mongoose');

const pengurusSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "Nama harus diisi!"]
  },
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
    type: String,
    require: [true, "Jabatan harus diisi!"]
  },
  tanggalMulai: {
    type: Date,
    require: [true, "Tanggal mulai selesai harus diisi!"]
  },
  tanggalSelesai: {
    type: Date,
    require: [true, "Tanggal selesai harus diisi!"]
  }
})

module.exports = mongoose.model('Pengurus', pengurusSchema);