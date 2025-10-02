const Pemilik = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const pemilik = await Pemilik.find({ user_id });
      return res.status(200).json({ message: "Data pemilik berhasil difetch", data: pemilik })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;
      const { nama, ktp, alamat, saham } = req.body;

      let pemilik = new Pemilik({ user_id, nama, ktp, alamat, saham });
      if (!nama || !ktp) {
        return res.status(400).json({ message: "Nama dan ktp wajib diisi" });
      }
      await pemilik.save();
      return res.status(200).json({ message: "Data pemilik berhasil ditambah", data: pemilik })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Pemilik.findByIdAndDelete({ _id: id })
      return res.status(200).json({ message: "Data pemilik berhasil dihapus" })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  }
}