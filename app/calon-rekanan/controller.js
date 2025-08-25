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
  accept: async (req, res) => {
    try {
      res.render('admin/')
    } catch (err) {
      console.log(err)
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const statusRekanan = await StatusRekanan.findOneAndUpdate({ _id: id }, { status })
      res.redirect("/calon-rekanan")
    } catch (err) {
      console.log(err)
    }
  }
}