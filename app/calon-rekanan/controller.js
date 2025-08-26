const StatusRekanan = require('./models')

module.exports = {
  index: async (req, res) => {
    try {
      res.render('admin/calon-rekanan/view_calon-rekanan')
    } catch (err) {
      console.log(err)
    }
  },
  viewUser: async (req, res) => {
    try {
      res.render('admin/calon-rekanan/view_user')
    } catch (err) {
      console.log(err)
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { userId, status } = req.body;
      const statusRekanan = await StatusRekanan({ userId, status })
      await statusRekanan.save();
      res.status(200).json({ message: "Status rekanan berhasil dibuat", data: izinUsaha })
    } catch (err) {
      console.log(err)
    }
  },
  actionAccept: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status })
      res.redirect("/calon-rekanan")
    } catch (err) {
      console.log(err)
    }
  },
  actionReject: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status })
      res.redirect("/calon-rekanan")
    } catch (err) {
      console.log(err)
    }
  }
}