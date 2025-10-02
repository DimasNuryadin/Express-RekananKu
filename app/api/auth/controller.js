const Player = require('./model');
const bcrypt = require('bcryptjs');
const config = require("../../../config");
const jwt = require('jsonwebtoken');

module.exports = {
  signUp: async (req, res) => {
    try {
      const { email, password } = req.body;
      const newPlayer = new Player({ email, password });
      await newPlayer.save();
      res.status(201).json({ message: 'Berhasil sign up', playerId: newPlayer._id });
    } catch (error) {
      res.status(500).json({ message: 'Error creating player', error });
    }
  },
  signIn: async (req, res, next) => {
    const { email, password } = req.body;

    Player.findOne({ email: email }).then(async (player) => {
      if (player) {
        const checkPassword = await bcrypt.compare(password, player.password)  // result true/false
        if (checkPassword) {
          // JWT, create token
          const token = jwt.sign({
            player: {
              id: player.id,
              email: player.email,
            }
          }, config.jwtKey)

          // Kirim token ke response
          res.status(200).json({ data: { token } })
        } else {
          res.status(403).json({ message: 'password yang anda masukan salah', error: 'forbidden' })
        }
      } else {
        res.status(403).json({ message: 'email yang anda masukan belum terdaftar', error: 'forbidden' })
      }
    }).catch((err) => {
      res.status(500).json({ message: err.message || `Internal server error` })
      next();
    })
  },
}