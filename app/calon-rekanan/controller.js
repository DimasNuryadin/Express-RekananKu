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
    } catch (error) {
      console.log(error)
    }
  },
  accept: async (req, res) => {
    try {
      res.render('admin/')
    } catch (error) {
      console.log(error)
    }
  }
}