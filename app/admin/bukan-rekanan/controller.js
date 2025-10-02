const StatusRekanan = require('../../api/status-rekanan/model');
const DataPerusahaan = require('../../api/data-perusahaan/model');
const IzinUsaha = require('../../api/izin-usaha/model');
const Pemilik = require('../../api/pemilik/model');
const Pengurus = require('../../api/pengurus/model');
const TenagaAhli = require('../../api/tenaga-ahli/model');

module.exports = {
  index: async (req, res) => {
    try {
      const statusRekanan = await StatusRekanan.find({ status: 'Bukan Rekanan' })
        .populate('dataPerusahaan', 'namaPerusahaan bidangUsaha');

      res.render('admin/bukan-rekanan/view_bukan-rekanan', {
        statusRekanan,
        email: req.session.user.email,
        title: 'Halaman Bukan Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/bukan-rekanan/view_bukan-rekanan')
    }
  },
  viewUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const dataPerusahaan = await DataPerusahaan.findOne({ user: userId })
      const izinUsaha = await IzinUsaha.find({ user: userId })
      const pemilik = await Pemilik.find({ user: userId })
      const pengurus = await Pengurus.find({ user: userId })
      const tenagaAhli = await TenagaAhli.find({ user: userId })
      res.render('admin/bukan-rekanan/view_user', {
        dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli, email: req.session.user.email,
        title: 'Halaman View Bukan Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/bukan-rekanan/view_user')
    }
  },
}