const mongoose = require('mongoose');

const dataPerusahaanSchema = mongoose.Schema({
  userId: {
    type: Number,
    require: [true, "userId harus diisi!"],
    unique: true
  },
  namaPerusahaan: {
    type: String,
    require: [true, "Nama perusahaan harus diisi!"]
  },
  bidangUsaha: {
    type: String,
    require: [true, "Bidang usaha perusahaan harus diisi!"]
  },
  tipe: {
    type: String,
    enum: ['PT', 'Yayasan', 'Koperasi', 'CV', 'Firma']
  },
  npwp: {
    type: String,
  },
  alamat: {
    type: String,
  },
  kota: {
    type: String,
    require: [true, "Kota harus diisi!"]
  },
  provinsi: {
    type: String,
    require: [true, "Provinsi harus diisi!"]
  },
  kodePos: {
    type: String,
  },
  telepon: {
    type: String,
    require: [true, "Telepon harus diisi!"],
    minLength: [8, "Panjang telepon min 8 karakter"]
  },
  website: {
    type: String
  },
  kantorCabang: {
    type: Boolean
  }
}, { timestamps: true })

module.exports = mongoose.model('DataPerusahaan', dataPerusahaanSchema);