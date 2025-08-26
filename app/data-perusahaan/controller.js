const DataPerusahaan = require('./model')

module.exports = {
  getDataPerusahaan: async (req, res) => {
    try {
      const dataPerusahaan = await DataPerusahaan.find();
      res.status(200).json({ message: "Data data perusahaan berhasil difetch", data: dataPerusahaan })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { nama, ktp, alamat, jabatan, tanggalSelesai } = req.body;

      let dataPerusahaan = await DataPerusahaan({ nama, ktp, alamat, jabatan, tanggalSelesai });
      await dataPerusahaan.save();
      res.status(200).json({ message: "Data dataPerusahaan berhasil ditambah", data: dataPerusahaan })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await DataPerusahaan.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data dataPerusahaan berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}