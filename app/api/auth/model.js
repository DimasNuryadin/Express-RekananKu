const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')
const HASH_ROUND = 10;

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi!"]
  },
  email: {
    type: String,
    required: [true, "Email harus diisi!"]
  },
  password: {
    type: String,
    required: [true, "Password harus diisi!"],
    maxLength: [225, "Panjang password maksimal 225 karakter"],
  }
}, { timestamps: true })  // Untuk menambah createdAt dan updateAt

// Cek email jika sudah terdaftar tidak boleh signin
playerSchema.path('email').validate(async function (value) {
  try {
    const count = await this.model('Player').countDocuments({ email: value })
    return !count;
  } catch (err) {
    // throw err
    throw new Error(err)
  }
}, attr => `${attr.value} sudah terdaftar`)

// pre: Sebelum save, hash dulu passwordnya
playerSchema.pre('save', function (next) {   // Fungsi Hash password pakai bcrypt
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next()
})

module.exports = mongoose.model('Player', playerSchema)