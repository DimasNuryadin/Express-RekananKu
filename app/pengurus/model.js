const mongoose = require('mongoose');

const pengurusSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "userId harus diisi!"]
  },
  nama: {
    type: String,
    require: [true, "Nama harus diisi!"]
  },
  ktp: {
    type: String,
    required: [true, "KTP harus diisi!"],
    unique: true,
    minLength: [16, "Panjang ktp harus 16 karakter"],
    maxLength: [16, "Panjang ktp harus 16 karakter"]
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
}, { timestamps: true })

module.exports = mongoose.model('Pengurus', pengurusSchema);