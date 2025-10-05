
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
- **Mocha + Chai** — unit/integration testing  

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
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/rekananku
   JWT_SECRET=your_jwt_secret
   ```

4. Jalankan server:

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

5. Server berjalan di `http://localhost:5000`  
   Endpoint API utama tersedia di `/api/...`

---

## 🔗 Integrasi dengan Frontend

Frontend: [Next-RekananKu](https://github.com/DimasNuryadin/Next-RekananKu)  
Gunakan variabel environment berikut di frontend untuk mengakses API backend:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

Pastikan **CORS** diaktifkan agar permintaan dari domain frontend (misalnya `localhost:3000`) dapat diterima backend.

---

## 📚 Endpoint Utama (Contoh)

| Method | Endpoint | Deskripsi |
|--------|-----------|-----------|
| `POST` | `/api/auth/register` | Registrasi pengguna baru |
| `POST` | `/api/auth/login` | Login & mendapatkan JWT token |
| `GET` | `/api/rekanan` | Mendapatkan daftar rekanan |
| `POST` | `/api/rekanan` | Menambah data rekanan baru |
| `PUT` | `/api/rekanan/:id` | Mengedit data rekanan |
| `DELETE` | `/api/rekanan/:id` | Menghapus data rekanan |
| `GET` | `/api/profile` | Mendapatkan data profil pengguna (auth required) |

---

## 🧩 Middleware

Beberapa middleware penting:

- `authMiddleware.js` — memverifikasi token JWT  
- `errorHandler.js` — menangani error global  
- `validateInput.js` — validasi request body  

---

## 🧪 Testing

Gunakan **Mocha** + **Chai** untuk pengujian API.

### Menjalankan Test

```bash
npm run test
```

Pastikan koneksi database test telah diatur (bisa pakai MongoDB in-memory atau database terpisah).

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

---

## 👥 Kontribusi

Jika ingin berkontribusi:

1. Fork repository  
2. Buat branch baru: `feature/nama-fitur`  
3. Lakukan perubahan dan commit  
4. Push ke branch tersebut  
5. Buat Pull Request ke repo utama  

---

## 📝 Lisensi

*(Tambahkan lisensi open-source jika kamu ingin, misalnya MIT atau Apache 2.0.)*
