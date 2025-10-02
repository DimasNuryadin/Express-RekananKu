const DataPerusahaan = require('./model')

module.exports = {
  getDataPerusahaan: async (req, res) => {
    try {
      const user_id = req.player._id;
      const dataPerusahaan = await DataPerusahaan.findOne({ user_id });
      return res.status(200).json({ message: "Data data perusahaan berhasil difetch", data: dataPerusahaan })
    } catch (err) {
      return res.status(400).json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;
      const {
        namaPerusahaan,
        bidangUsaha,
        tipe,
        npwp,
        alamat,
        kota,
        provinsi,
        kodePos,
        telepon,
        website,
        kantorCabang
      } = req.body;

      if (!namaPerusahaan || !npwp) {
        return res.status(400).json({ message: "Nama perusahaan dan NPWP wajib diisi" });
      }

      const fetchData = await DataPerusahaan.findOne({ user_id });
      if (fetchData) {
        return res.status(409).json({ message: "Data perusahaan sudah ada untuk user ini" });
      }

      const dataDb = new DataPerusahaan({
        user_id,
        namaPerusahaan,
        bidangUsaha,
        tipe,
        npwp,
        alamat,
        kota,
        provinsi,
        kodePos,
        telepon,
        website,
        kantorCabang,
      });
      await dataDb.save();

      return res.status(201).json({
        message: "Data perusahaan berhasil ditambah",
        data: dataDb,
      });
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },

  actionEdit: async (req, res) => {
    try {
      const user_id = req.player._id;
      const {
        namaPerusahaan,
        bidangUsaha,
        tipe,
        npwp,
        alamat,
        kota,
        provinsi,
        kodePos,
        telepon,
        website,
        kantorCabang
      } = req.body;

      if (!namaPerusahaan || !npwp) {
        return res.status(400).json({ message: "Nama perusahaan dan NPWP wajib diisi" });
      }

      const fetchData = await DataPerusahaan.findOne({ user_id });
      if (!fetchData) {
        return res.status(404).json({ message: "Data perusahaan belum ada, silakan tambahkan terlebih dahulu" });
      }

      const updatedData = await DataPerusahaan.findOneAndUpdate(
        { user_id },
        {
          namaPerusahaan,
          bidangUsaha,
          tipe,
          npwp,
          alamat,
          kota,
          provinsi,
          kodePos,
          telepon,
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