const StatusRekanan = require('../calon-rekanan/models')
const DataPerusahaan = require('../data-perusahaan/model');
const IzinUsaha = require('../izin-usaha/model');
const Pemilik = require('../pemilik/model');
const Pengurus = require('../pengurus/model');
const TenagaAhli = require('../tenaga-ahli/model');

module.exports = {
  index: async (req, res) => {
    try {
      const statusRekanan = await StatusRekanan.find({ status: 'Bukan Rekanan' });
      // const dataPerusahaan = await DataPerusahaan.find();
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
      const dataPerusahaan = await DataPerusahaan.findOne({ userId: userId })
      const izinUsaha = await IzinUsaha.find({ userId: userId })
      const pemilik = await Pemilik.find({ userId: userId })
      const pengurus = await Pengurus.find({ userId: userId })
      const tenagaAhli = await TenagaAhli.find({ userId: userId })
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