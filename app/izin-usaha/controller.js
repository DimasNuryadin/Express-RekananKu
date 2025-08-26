const IzinUsaha = require('./model')

module.exports = {
  getIzinUsaha: async (req, res) => {
    try {
      const izinUsaha = await IzinUsaha.find();
      res.status(200).json({ message: "Data Izin Usaha berhasil difetch", data: izinUsaha })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { jenisIzin, noSurat, berlakuSampai, instansiPemberi } = req.body;

      let izinUsaha = await IzinUsaha({ jenisIzin, noSurat, berlakuSampai, instansiPemberi });
      await izinUsaha.save();
      res.status(200).json({ message: "Data Izin Usaha berhasil ditambah", data: izinUsaha })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await IzinUsaha.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data Izin Usaha berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}