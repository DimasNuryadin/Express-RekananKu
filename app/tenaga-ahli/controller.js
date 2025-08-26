const TenagaAhli = require('./model')

module.exports = {
  getAllTenagaAhli: async (req, res) => {
    try {
      const tenagaAhli = await TenagaAhli.find();
      res.status(200).json({ message: "Data tenaga ahli berhasil difetch", data: tenagaAhli })
    } catch (err) {
      res.json({ message: err })
    }
  },
  getTenagaAhli: async (req, res) => {
    const { userId } = req.params;
    try {
      const tenagaAhli = await TenagaAhli.find({ userId });
      res.status(200).json({ message: "Data tenaga ahli berhasil difetch", data: tenagaAhli })
    } catch (err) {
      res.json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const data = req.body;
      const dataTenagaAhli = {
        userId: data.userId,
        nama: data.nama,
        alamat: data.alamat,
        pendidikanTerakhir: data.pendidikanTerakhir,
        email: data.email,
        profesiKeahlian: data.profesiKeahlian,
        ktp: data.ktp,
        npwp: data.npwp,
        jenisKelamin: data.jenisKelamin,
        kewarganegaraan: data.kewarganegaraan,
        pengalamanKerja: data.pengalamanKerja,
        jabatan: data.jabatan,
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