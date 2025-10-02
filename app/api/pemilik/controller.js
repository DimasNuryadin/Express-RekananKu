const Pemilik = require('./model')

module.exports = {
  getAllPemilik: async (req, res) => {
    try {
      const pemilik = await Pemilik.find();
      res.status(200).json({ message: "Data pemilik berhasil difetch", data: pemilik })
    } catch (err) {
      res.json({ message: err })
    }
  },
  getPemilik: async (req, res) => {
    const { userId } = req.params;
    try {
      const pemilik = await Pemilik.find({ user: userId });
      res.status(200).json({ message: "Data pemilik berhasil difetch", data: pemilik })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { user, nama, ktp, alamat, saham } = req.body;

      let pemilik = await Pemilik({ user, nama, ktp, alamat, saham });
      await pemilik.save();
      res.status(200).json({ message: "Data pemilik berhasil ditambah", data: pemilik })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Pemilik.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data pemilik berhasil dihapus" })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  }
}