
# Express-RekananKu

**Express-RekananKu** adalah backend API untuk sistem procurement “RekananKu”.  
Aplikasi ini dibangun dengan **Express.js** dan **MongoDB** untuk menangani autentikasi, manajemen data rekanan, dan komunikasi data ke frontend **[Next-RekananKu](https://github.com/DimasNuryadin/Next-RekananKu)**.

Procurement adalah proses mendapatkan barang atau jasa dari pihak eksternal untuk memenuhi kebutuhan organisasi secara **efektif**, **efisien**, **transparan**, dan **sesuai aturan**.

---

## ⚙️ Teknologi yang Digunakan

- **Express.js** — framework backend berbasis Node.js  
- **MongoDB + Mongoose** — database dan ODM  
- **JWT (JSON Web Token)** — autentikasi berbasis token  
- **bcrypt.js** — enkripsi password  
- **dotenv** — konfigurasi environment  
- **CORS & Morgan** — logging & keamanan API  

---

## 📁 Struktur Direktori

```
src/
 ├─ config/
 │   └─ db.js
 ├─ controllers/
 ├─ middlewares/
 ├─ models/
 ├─ routes/
 ├─ utils/
 └─ server.js
.env.example
package.json
```

Penjelasan:
- `config/` — koneksi database dan konfigurasi lain  
- `controllers/` — logika utama setiap endpoint  
- `middlewares/` — middleware untuk autentikasi, validasi, dsb  
- `models/` — skema Mongoose  
- `routes/` — definisi endpoint API  
- `utils/` — fungsi bantu (helper, error handling, dsb)  
- `server.js` — entry point aplikasi  

---

## 🚀 Instalasi & Menjalankan Server

### Prasyarat
- Node.js (versi 18+)
- MongoDB (lokal atau Atlas)
- npm / yarn / pnpm  

### Langkah

1. Clone repository:

   ```bash
   git clone https://github.com/DimasNuryadin/Express-RekananKu.git
   cd Express-RekananKu
   ```

2. Install dependencies:

   ```bash
   npm install
   # atau
   yarn install
   ```

3. Buat file `.env` berdasarkan `.env.example`, lalu isi variabel seperti:
   ```
   PORT=4000
   MONGO_URL=mongodb://localhost:27017/rekananku
   SECRET=your_jwt_secret
   ```

4. Jalankan server:

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. Server berjalan di `http://localhost:4000`  
   Endpoint API utama tersedia di `/api/v1`

---

## 🔗 Integrasi dengan Frontend

Frontend: [Next-RekananKu](https://github.com/DimasNuryadin/Next-RekananKu)  
Gunakan variabel environment berikut di frontend untuk mengakses API backend:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api/v1
```

Pastikan **CORS** diaktifkan agar permintaan dari domain frontend (misalnya `localhost:3000`) dapat diterima backend.

---

## 📚 Endpoint Utama (Contoh)

| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `POST` | `/api/v1/auth/signup` | Registrasi pengguna baru |
| `POST` | `/api/v1/auth/signin` | Login & mendapatkan JWT token |
| `GET` | `/api/v1/data-perusahaan` | Mendapatkan data perusahaan (auth required) |
| `PUT` | `/api/v1/data-perusahaan` | Mengedit data perusahaan (auth required) |
| `GET` | `/api/v1/izin-usaha` | Mendapatkan data izin usaha (auth required) |
| `POST` | `/api/v1/izin-usaha` | Menambah data izin usaha (auth required) |
| `DELETE` | `/api/v1/izin-usaha/:id` | Menghapus data izin usaha (auth required) |
| `GET` | `/api/v1/status-rekanan` | Mendapatkan data status rekanan |
| `POST` | `/api/v1status-rekanan` | Mengajukan rekanan |

---

## 🧩 Middleware

Beberapa middleware penting:

- `authMiddleware.js` — memverifikasi token JWT  
- `errorHandler.js` — menangani error global  
- `validateInput.js` — validasi request body  

---

## 📦 Deployment

Untuk mode produksi:

```bash
npm run build
npm start
```

Atur environment variabel (`.env`) agar menunjuk ke database dan domain produksi.  
Contoh platform: **Render**, **Railway**, **Vercel (API routes)**, atau **VPS sendiri**.

---

## ✅ Fitur Utama

- Sistem autentikasi JWT  
- Manajemen data rekanan (CRUD)  
- Validasi dan hashing password  
- Pengaturan akses (middleware)  
- Integrasi mudah dengan frontend Next.js  
- Logging dan error handling terstruktur  
- Halaman admin menggunakan EJS untuk memantau dan mengelola data rekanan, pengguna, serta aktivitas sistem.
  - Admin dapat melihat daftar pengguna, menerima dan menolak rekanan secara manual.
  - Tampilan antarmuka sederhana berbasis template EJS.
  - Data diambil langsung dari MongoDB melalui controller dan model.
  - Dapat diperluas untuk menampilkan jumlah registrasi user, pengajuan rekanan, dan bukan rekanan.

---