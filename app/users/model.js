const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email harus diisi!"]
  },
  password: {
    type: String,
    require: [true, "Password harus diisi!"]
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin'
  },
  verifikasi: {
    type: String,
    enum: [0, 1],
    default: 1
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);