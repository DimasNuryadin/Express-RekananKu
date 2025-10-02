const mongoose = require('mongoose');

const dataPerusahaanSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User id harus diisi"],
    ref: 'Player'
  },
  namaPerusahaan: {
    type: String,
    required: [true, "Nama perusahaan harus diisi!"]
  },
  bidangUsaha: {
    type: String,
    required: [true, "Bidang usaha perusahaan harus diisi!"]
  },
  tipe: {
    type: String,
    enum: ['PT', 'Yayasan', 'Koperasi', 'CV', 'Firma']
  },
  npwp: {
    type: String,
    required: [true, "NPWP harus diisi!"]
  },
  telepon: {
    type: String,
    required: [true, "Telepon harus diisi!"],
    minLength: [8, "Panjang telepon min 8 karakter"]
  },
  website: {
    type: String
  },
  alamat: {
    type: String,
  },
  kota: {
    type: String,
    required: [true, "Kota harus diisi!"]
  },
  provinsi: {
    type: String,
    required: [true, "Provinsi harus diisi!"]
  },
  kodePos: {
    type: String,
  },
  kantorCabang: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('DataPerusahaan', dataPerusahaanSchema);