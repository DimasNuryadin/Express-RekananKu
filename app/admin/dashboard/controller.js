const StatusRekanan = require('../../api/status-rekanan/model');
const Player = require('../../api/auth/model');

module.exports = {
  index: async (req, res) => {
    try {
      const [
        statusReview,
        statusRekanan,
        statusBukanRekanan,
        player
      ] = await Promise.all([
        StatusRekanan.countDocuments({ status: 'Review' }),
        StatusRekanan.countDocuments({ status: 'Rekanan' }),
        StatusRekanan.countDocuments({ status: 'Bukan Rekanan' }),
        Player.countDocuments()
      ]);

      res.render('index', {
        statusReview, statusRekanan, statusBukanRekanan, player,
        email: req.session.user.email,
        title: 'Halaman Dashboard',
      })
    } catch (err) {
      console.error('Dashboard error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
}