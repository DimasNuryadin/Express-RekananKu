const StatusRekanan = require('./model')

module.exports = {
  getStatusRekanan: async (req, res) => {
    const { userId } = req.params;
    try {
      const tenagaAhli = await StatusRekanan.find({ user: userId });
      res.status(200).json({ message: "Status rekanan berhasil difetch", data: tenagaAhli })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { user } = req.body;
      if (!user) {
        return res.status(400).json({ message: "User harus diisi" });
      }

      const statusRekanan = new StatusRekanan({ user });
      await statusRekanan.save();
      return res.status(201).json({
        message: "Data tenaga ahli berhasil ditambah",
        data: statusRekanan,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  },
}