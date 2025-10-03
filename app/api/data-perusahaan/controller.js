const DataPerusahaan = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const dataPerusahaan = await DataPerusahaan.findOne({ user_id });
      return res.status(200).json({ message: "Data data perusahaan berhasil difetch", data: dataPerusahaan })
    } catch (err) {
      return res.status(400).json({ message: err })
    }
  },
  actionEdit: async (req, res) => {
    try {
      const user_id = req.player._id;
      const {
        bidangUsaha,
        tipe,
        npwp,
        alamat,
        kota,
        provinsi,
        kodePos,
        website,
        kantorCabang
      } = req.body;

      if (!bidangUsaha || !npwp) {
        return res.status(400).json({ message: "Bidang usaha dan NPWP wajib diisi" });
      }

      const fetchData = await DataPerusahaan.findOne({ user_id });
      if (!fetchData) {
        return res.status(404).json({ message: "Data perusahaan belum ada, silakan tambahkan terlebih dahulu" });
      }

      const updatedData = await DataPerusahaan.findOneAndUpdate(
        { user_id },
        {
          bidangUsaha,
          tipe,
          npwp,
          alamat,
          kota,
          provinsi,
          kodePos,
          website,
          kantorCabang,
        },
        { new: true, runValidators: true } // agar validasi mongoose jalan
      );

      return res.status(200).json({
        message: "Data perusahaan berhasil diperbarui",
        data: updatedData,
      });

    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
}