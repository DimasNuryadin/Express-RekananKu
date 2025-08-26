const Pengurus = require('./model')

module.exports = {
  getAllPengurus: async (req, res) => {
    try {
      const pengurus = await Pengurus.find();
      res.status(200).json({ message: "Data pengurus berhasil difetch", data: pengurus })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { userId, nama, ktp, alamat, jabatan, tanggalMulai, tanggalSelesai } = req.body;

      let pengurus = await Pengurus({ userId, nama, ktp, alamat, jabatan, tanggalMulai, tanggalSelesai });
      await pengurus.save();
      res.status(200).json({ message: "Data pengurus berhasil ditambah", data: pengurus })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Pengurus.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data pengurus berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}