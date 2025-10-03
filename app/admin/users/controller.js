const User = require('./model');
const bcrypt = require('bcryptjs');

module.exports = {
  viewSignin: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus }
      if (req.session.user === null || req.session.user === undefined) {
        res.render('admin/users/view_signin', { alert, title: "Halaman Sign In" });
      } else {
        res.redirect('/admin/dashboard');
      }

    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin')
    }
  },
  actionSignin: async (req, res) => {
    try {
      const { email, password } = req.body;
      const check = await User.findOne({ email: email });

      if (check) {
        const checkPassword = await bcrypt.compare(password, check.password);
        if (checkPassword) {
          req.session.user = {
            id: check._id,
            email: check.email,
            // status: check.status
          }
          res.redirect('/admin/dashboard');
        } else {
          req.flash("alertMessage", "Kata sandi salah");
          req.flash("alertStatus", "danger");
          res.redirect('/admin');
        }
      } else {
        req.flash("alertMessage", "User tidak ditemukan");
        req.flash("alertStatus", "danger");
        res.redirect('/admin');
      }

    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin')
    }
  },
  actionLogout: (req, res) => {
    req.session.destroy();
    res.redirect('/admin');
  }
}