const mongoose = require('mongoose');

const pengurusSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id harus diisi!"],
    ref: 'Player'
  },
  nama: {
    type: String,
    required: [true, "Nama harus diisi!"]
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
    required: [true, "Alamat harus diisi!"]
  },
  jabatan: {
    type: String,
    required: [true, "Jabatan harus diisi!"]
  },
  tanggalMulai: {
    type: Date,
    required: [true, "Tanggal mulai selesai harus diisi!"]
  },
  tanggalSelesai: {
    type: Date,
    required: [true, "Tanggal selesai harus diisi!"]
  }
}, { timestamps: true })

module.exports = mongoose.model('Pengurus', pengurusSchema);