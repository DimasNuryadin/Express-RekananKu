const Pemilik = require('./model')

module.exports = {
  getPemilik: async (req, res) => {
    try {
      const pemilik = await Pemilik.find();
      res.status(200).json({ message: "Data pemilik berhasil difetch", data: pemilik })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { nama, ktp, alamat, saham } = req.body;

      let pemilik = await Pemilik({ nama, ktp, alamat, saham });
      await pemilik.save();
      res.status(200).json({ message: "Data pemilik berhasil ditambah", data: pemilik })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Pemilik.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data pemilik berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}