const Pengurus = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const pengurus = await Pengurus.find({ user_id });
      return res.status(200).json({ message: "Data pengurus berhasil difetch", data: pengurus })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;
      const { nama, ktp, alamat, jabatan, tanggalMulai, tanggalSelesai } = req.body;

      let pengurus = new Pengurus({ user_id, nama, ktp, alamat, jabatan, tanggalMulai, tanggalSelesai });
      await pengurus.save();
      res.status(200).json({ message: "Data pengurus berhasil ditambah", data: pengurus })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Pengurus.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data pengurus berhasil dihapus" })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  }
}