const StatusRekanan = require('../../api/status-rekanan/model');
const DataPerusahaan = require('../../api/data-perusahaan/model');
const IzinUsaha = require('../../api/izin-usaha/model');
const Pemilik = require('../../api/pemilik/model');
const Pengurus = require('../../api/pengurus/model');
const TenagaAhli = require('../../api/tenaga-ahli/model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus }
      const statusRekanan = await StatusRekanan.find({ status: 'Review' })
        .populate('data_perusahaan');

      res.render('admin/calon-rekanan/view_calon-rekanan', {
        statusRekanan, alert,
        email: req.session.user.email,
        title: 'Halaman Calon Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/calon-rekanan')
    }
  },
  viewUser: async (req, res) => {
    try {
      const { user_id } = req.params;
      const dataPerusahaan = await DataPerusahaan.findOne({ user_id });
      const izinUsaha = await IzinUsaha.find({ user_id })
      const pemilik = await Pemilik.find({ user_id })
      const pengurus = await Pengurus.find({ user_id })
      const tenagaAhli = await TenagaAhli.find({ user_id })
      res.render('admin/calon-rekanan/view_user', {
        dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli, email: req.session.user.email,
        title: 'Halaman Data Calon Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/calon-rekanan')
    }
  },
  actionAccept: async (req, res) => {
    try {
      const { id } = req.params;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status: "Rekanan" })
      req.flash("alertMessage", "Berhasil terima calon rekanan");
      req.flash("alertStatus", "success");
      res.redirect("/admin/calon-rekanan")
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/calon-rekanan')
    }
  },
  actionReject: async (req, res) => {
    try {
      const { id } = req.params;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status: "Bukan Rekanan" })
      req.flash("alertMessage", "Berhasil tolak calon rekanan");
      req.flash("alertStatus", "success");
      res.redirect("/admin/calon-rekanan")
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/calon-rekanan')
    }
  }
}