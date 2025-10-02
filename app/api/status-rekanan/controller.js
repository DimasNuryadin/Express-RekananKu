const StatusRekanan = require('./model')

module.exports = {
  actionGet: async (req, res) => {
    try {
      const user_id = req.player._id;
      const statusRekanan = await StatusRekanan.findOne({ user_id });
      res.status(200).json({ message: "Status rekanan berhasil difetch", data: statusRekanan })
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const user_id = req.player._id;

      const getStatus = StatusRekanan.findOne({ user_id });
      if (!getStatus) {
        const statusRekanan = new StatusRekanan({ user_id });
        await statusRekanan.save();
        return res.status(201).json({
          message: "Status berhasil ditambah",
          data: statusRekanan,
        });
      }

      const updatedData = await StatusRekanan.findOneAndUpdate(
        { user_id },
        {
          status: 'Review'
        },
        { new: true, runValidators: true } // agar validasi mongoose jalan
      );
      return res.status(201).json({
        message: "Status berhasil diupdate",
        data: updatedData,
      });
    } catch (err) {
      return res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
    }
  },
}