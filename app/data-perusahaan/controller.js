const DataPerusahaan = require('./model')

module.exports = {
  getAllDataPerusahaan: async (req, res) => {
    try {
      const dataPerusahaan = await DataPerusahaan.find();
      res.status(200).json({ message: "Data data perusahaan berhasil difetch", data: dataPerusahaan })
    } catch (err) {
      res.json({ message: err })
    }
  },
  getDataPerusahaan: async (req, res) => {
    const { userId } = req.params;
    try {
      const dataPerusahaan = await DataPerusahaan.find({ user: userId });
      // console.log('data', userId)
      res.status(200).json({ message: "Data data perusahaan berhasil difetch", dataPerusahaan })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const data = req.body;
      const dataPerusahaan = {
        user: data.user,
        namaPerusahaan: data.namaPerusahaan,
        bidangUsaha: data.bidangUsaha,
        tipe: data.tipe,
        npwp: data.npwp,
        alamat: data.alamat,
        kota: data.kota,
        provinsi: data.provinsi,
        kodePos: data.kodePos,
        telepon: data.telepon,
        website: data.website,
        kantorCabang: data.kantorCabang,
      }
      let dataDb = await DataPerusahaan(dataPerusahaan);
      await dataDb.save();
      res.status(200).json({ message: "Data dataPerusahaan berhasil ditambah", data: dataDb })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await DataPerusahaan.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data data perusahaan berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}