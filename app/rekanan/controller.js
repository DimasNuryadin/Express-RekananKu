const StatusRekanan = require('../calon-rekanan/models')
const DataPerusahaan = require('../data-perusahaan/model');
const IzinUsaha = require('../izin-usaha/model');
const Pemilik = require('../pemilik/model');
const Pengurus = require('../pengurus/model');
const TenagaAhli = require('../tenaga-ahli/model');

module.exports = {
  index: async (req, res) => {
    try {
      const statusRekanan = await StatusRekanan.find({ status: 'Rekanan' });
      // const dataPerusahaan = await DataPerusahaan.find();
      res.render('admin/rekanan/view_rekanan', {
        statusRekanan,
        email: req.session.user.email,
        title: 'Halaman Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/admin/rekanan/view_rekanan')
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
      // console.log("data :", izinUsaha)
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