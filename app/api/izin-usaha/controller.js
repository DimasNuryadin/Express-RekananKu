const IzinUsaha = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const izinUsaha = await IzinUsaha.findOne({ user_id });
      return res.status(200).json({ message: "Data Izin Usaha berhasil difetch", data: izinUsaha })
    } catch (err) {
      return res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;
      const { jenisIzin, noSurat, berlakuSampai, instansiPemberi } = req.body;

      let izinUsaha = new IzinUsaha({ user_id, jenisIzin, noSurat, berlakuSampai, instansiPemberi });
      await izinUsaha.save();
      return res.status(200).json({ message: "Data Izin Usaha berhasil ditambah", data: izinUsaha })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await IzinUsaha.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data Izin Usaha berhasil dihapus" })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  }
}