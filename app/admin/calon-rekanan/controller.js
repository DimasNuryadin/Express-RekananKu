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
        .populate('dataPerusahaan', 'namaPerusahaan bidangUsaha');

      // console.log("cek", statusRekanan)
      res.render('admin/calon-rekanan/view_calon-rekanan', {
        statusRekanan, alert,
        email: req.session.user.email,
        title: 'Halaman Calon Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/calon-rekanan')
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
      res.render('admin/calon-rekanan/view_user', {
        dataPerusahaan, izinUsaha, pemilik, pengurus, tenagaAhli, email: req.session.user.email,
        title: 'Halaman Data Calon Rekanan',
      })
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect('/calon-rekanan')
    }
  },
  getStatusRekanan: async (req, res) => {
    const { userId } = req.params;
    try {
      const statusRekanan = await StatusRekanan.findOne({ user: userId });
      // console.log('data', userId)
      res.status(200).json({ message: "Data status rekanan berhasil difetch", data: statusRekanan })
    } catch (err) {
      res.status(400).json({ message: err })
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { user, dataPerusahaan } = req.body;
      const statusRekanan = await StatusRekanan({ user, dataPerusahaan })
      await statusRekanan.save();
      res.status(200).json({ message: "Status rekanan berhasil dibuat", data: statusRekanan })
    } catch (err) {
      res.json({ err })
    }
  },
  actionAccept: async (req, res) => {
    try {
      const { id } = req.params;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status: "Rekanan" })
      req.flash("alertMessage", "Berhasil terima calon rekanan");
      req.flash("alertStatus", "success");
      res.redirect("/calon-rekanan")
    } catch (err) {
      res.json({ err })
    }
  },
  actionReject: async (req, res) => {
    try {
      const { id } = req.params;
      await StatusRekanan.findOneAndUpdate({ _id: id }, { status: "Bukan Rekanan" })
      req.flash("alertMessage", "Berhasil tolak calon rekanan");
      req.flash("alertStatus", "success");
      res.redirect("/calon-rekanan")
    } catch (err) {
      res.json({ err })
    }
  }
}