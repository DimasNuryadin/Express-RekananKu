const TenagaAhli = require('./model')

module.exports = {
  getTenagaAhli: async (req, res) => {
    try {
      const tenagaAhli = await TenagaAhli.find();
      res.status(200).json({ message: "Data tenaga ahli berhasil difetch", data: tenagaAhli })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const data = req.body;
      const dataTenagaAhli = {
        nama: data.nama,
        ktp: data.ktp,
        alamat: data.alamat,
        jabatan: data.jabatan,
        pendidikanTerakhir: data.pendidikanTerakhir,
        profesiKeahlian: data.profesiKeahlian,
        npwp: data.npwp,
        kewarganegaraan: data.kewarganegaraan,
        pengalamanKerja: data.pengalamanKerja,
        statusKepegawaian: data.statusKepegawaian,
      }

      let tenagaAhli = await TenagaAhli(dataTenagaAhli);
      await tenagaAhli.save();
      res.status(200).json({ message: "Data tenaga ahli berhasil ditambah", data: tenagaAhli })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await TenagaAhli.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Data tenaga ahli berhasil dihapus" })
    } catch (err) {
      res.json({ message: err })
    }
  }
}