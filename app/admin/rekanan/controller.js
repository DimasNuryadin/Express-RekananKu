const StatusRekanan = require('../../api/status-rekanan/model');
const DataPerusahaan = require('../../api/data-perusahaan/model');
const IzinUsaha = require('../../api/izin-usaha/model');
const Pemilik = require('../../api/pemilik/model');
const Pengurus = require('../../api/pengurus/model');
const TenagaAhli = require('../../api/tenaga-ahli/model');

module.exports = {
  index: async (req, res) => {
    try {
      const statusRekanan = await StatusRekanan.find({ status: 'Rekanan' })
        .populate('data_perusahaan');

      res.render('admin/rekanan/view_rekanan', {
        statusRekanan,
        email: req.session.user.email,
        title: 'Halaman Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/rekanan')
    }
  },
  viewUser: async (req, res) => {
    try {
      const { user_id } = req.params;
      const dataPerusahaan = await DataPerusahaan.findOne({ user_id })
      const izinUsaha = await IzinUsaha.find({ user_id })
      const pemilik = await Pemilik.find({ user_id })
      const pengurus = await Pengurus.find({ user_id })
      const tenagaAhli = await TenagaAhli.find({ user_id })
      res.render('admin/rekanan/view_user', {
        dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli, email: req.session.user.email,
        title: 'Halaman Data Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/rekanan/view_user')
    }
  },
}