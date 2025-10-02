module.exports = {
  index: async (req, res) => {
    try {
      res.render('index', {
        email: req.session.user.email,
        title: 'Halaman Dashboard',
      })
    } catch (err) {
      console.log(err)
    }
  },
}