const mongoose = require('mongoose');

const pengurusSchema = mongoose.Schema({
  namaPerusahaan: {
    type: String,
    require: [true, "Nama perusahaan harus diisi!"]
  },
  tipePerusahaan: {
    type: String,
    require: [true, "Tipe perusahaan harus diisi!"]
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
  tanggalSelesai: {
    type: Date,
    require: [true, "Tanggal selesai harus diisi!"]
  }
})

module.exports = mongoose.model('Pengurus', pengurusSchema);