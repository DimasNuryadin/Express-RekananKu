const TenagaAhli = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const tenagaAhli = await TenagaAhli.find({ user_id });
      return res.status(200).json({ message: "Data tenaga ahli berhasil difetch", data: tenagaAhli })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;
      const data = req.body;
      const dataTenagaAhli = {
        user_id,
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

      let tenagaAhli = new TenagaAhli(dataTenagaAhli);
      await tenagaAhli.save();
      return res.status(201).json({ message: "Data tenaga ahli berhasil ditambah", data: tenagaAhli })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await TenagaAhli.findByIdAndDelete({ _id: id })
      return res.status(200).json({ message: "Data tenaga ahli berhasil dihapus" })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  }
}