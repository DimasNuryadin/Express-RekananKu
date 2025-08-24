const Pemilik = require('./model')

module.exports = {
  actionCreate: async (req, res) => {
    try {
      const { nama, ktp, alamat, saham } = req.body;

      let pemilik = await Pemilik({ nama, ktp, alamat, saham });
      await pemilik.save();
    } catch (err) {
      console.log(err)
    }
  }
}