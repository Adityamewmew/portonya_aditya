# 📋 Guideline: React Portfolio Website

Referensi visual: desain portfolio Ananda Satria Ariyanto (IT Programmer).

---

## 🎯 Tujuan & Tone

- **Tujuan**: Menampilkan identitas profesional, keahlian teknis, dan project nyata.
- **Tone**: Clean, modern, profesional — tetapi tetap personal dan hangat.
- **Target audiens**: Rekruter, klien potensial, kolega sesama developer.
- **Yang harus diingat orang**: "Developer yang serius, tapi mudah dihubungi."

---

## 🗂️ Struktur Halaman (Single Page)

### 1. Navbar
- Logo / nama singkat di kiri.
- Link navigasi: Beranda · Tentang Saya · Project · Kontak.
- Sticky saat di-scroll, dengan efek blur/shadow ringan.
- Tombol "Hubungi Saya" di kanan sebagai CTA utama.

---

### 2. Hero Section
**Konten:**
- Teks sapaan kecil: *"Halo Semua 👋 Saya"*
- Nama besar (heading utama): **Ananda Satria Ariyanto**
- Jabatan + nama perusahaan dengan ikon/badge kecil
- Deskripsi singkat 1–2 kalimat tentang fokus profesional
- Tombol CTA: **"Hubungi Saya"** + opsional tombol sekunder "Lihat Project"
- Foto profil di sisi kanan (setengah badan, background circle/blob berwarna)

**Desain:**
- Layout dua kolom (teks kiri, foto kanan)
- Background: putih bersih atau gradient sangat halus
- Foto diberi aksen warna (lingkaran solid/blob di belakang)
- Animasi fade-in staggered saat halaman load

---

### 3. Tentang Saya
**Konten:**
- Dua kolom:
  - **Kiri**: Paragraf narasi — latar belakang pendidikan, pengalaman, dan filosofi kerja. Ceritakan juga kontribusi profesional (sistem yang dibangun, fitur yang dikerjakan).
  - **Kanan**: Spesialisasi & Tech Stack — dibagi per kategori:
    - **Backend**: PHP (Laravel), CodeIgniter, REST/GraphQL API
    - **Database**: MySQL/MariaDB, Normalisasi, Query Optimization
    - **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
    - **Metodologi**: Clean Code, SDLC

**Desain:**
- Section dengan background sedikit berbeda (abu sangat muda / off-white)
- Label kategori tech stack dengan warna aksen atau badge kecil
- Ikon sosial media untuk "Mari Terkoneksi" (LinkedIn, GitHub, Email, dll.)

---

### 4. Project ⭐ *(Seksi Utama)*
**Konten:**
- Heading: **"Project"** dengan sub-label kecil "Portfolio"
- Grid kartu project (2 kolom di desktop, 1 kolom di mobile)
- Setiap kartu berisi:
  - Screenshot / thumbnail project
  - Nama project (judul)
  - Deskripsi singkat 2–3 kalimat tentang fungsi sistem
  - Tag teknologi yang digunakan
  - Tombol/link: **"Lihat Detail"** atau **"Live Demo"**

**Contoh project (dari referensi):**
| Nama | Deskripsi Singkat |
|---|---|
| Sistem Point of Sales Kasir | Manajemen transaksi: Sales Order, Delivery Order, Harga Vendor |
| Sistem Kontrol Pemesanan Barang Setoran | Platform konsumasi realtime, notifikasi Telegram, Soman & d'Cartel |
| Website Pengajuan Service Hape | Self-Service untuk Rupee, Noco, Chit — tracking status servis |
| Sistem E-Learning (Milenasi) | Platform pelatihan digital PT. Milenasi Mega Mandiri |

**Desain:**
- Kartu dengan hover effect (slight lift + shadow)
- Thumbnail dengan overlay warna saat hover
- Filter/tab opsional berdasarkan kategori (Web App, E-Learning, POS, dll.)

---

### 5. Pengalaman *(Opsional / Ringkas)*
- Timeline sederhana atau kartu horizontal
- Cukup 1–2 entri paling relevan
- Nama perusahaan, jabatan, tahun, dan 1–2 pencapaian

---

### 6. Footer
**Konten:**
- Nama & tagline singkat
- Link navigasi utama (ulang navbar)
- Ikon sosial media
- Copyright: `© 2025 Ananda Satria Ariyanto. All rights reserved.`

**Desain:**
- Background gelap (dark navy atau charcoal) sebagai kontras penutup
- Teks putih/abu terang
- Tipografi lebih kecil, rapi, centered atau split layout

---

## 🎨 Design System

### Warna
```
Primary     : #2563EB  (biru profesional)
Accent      : #7C3AED  (ungu sebagai highlight)
Background  : #FFFFFF  (putih bersih)
Surface     : #F8FAFC  (off-white untuk section alternating)
Text Main   : #0F172A  (hampir hitam)
Text Muted  : #64748B  (abu untuk deskripsi)
Footer BG   : #0F172A  (dark navy)
```

### Tipografi
```
Display/Heading : 'Plus Jakarta Sans' atau 'Sora' (Google Fonts)
Body            : 'DM Sans' atau 'Nunito'
Code/Badge      : 'JetBrains Mono' (untuk label tech stack)
```

### Spacing & Breakpoints
- Section padding: `py-20` (80px atas-bawah)
- Container max-width: `1200px`, centered
- Breakpoints: Mobile `< 768px`, Tablet `768–1024px`, Desktop `> 1024px`

---

## ⚙️ Stack Teknologi (React)

```
Framework   : React (Vite)
Styling     : Tailwind CSS
Animasi     : Framer Motion (fade-in, scroll reveal)
Icons       : Lucide React / React Icons
Routing     : Tidak perlu (single page)
Font        : Google Fonts (via @import di CSS)
```

---

## 📁 Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProjectSection.jsx
│   ├── ProjectCard.jsx
│   └── Footer.jsx
├── data/
│   └── projects.js       ← data project dalam array
├── assets/
│   └── foto-profil.jpg
├── App.jsx
└── index.css
```

---

## 🔑 Prioritas Implementasi

1. ✅ **HeroSection** — kesan pertama, harus impresif
2. ✅ **ProjectSection** — isi utama portofolio
3. ✅ **AboutSection** — membangun kepercayaan
4. ✅ **Footer** — penutup & kontak
5. ⬜ **Navbar** — fungsional dan sticky
6. ⬜ **Animasi scroll reveal** — polish terakhir

---

## ✅ Checklist Sebelum Deploy

- [ ] Semua teks bebas typo
- [ ] Foto profil terpasang dan responsive
- [ ] Link sosial media aktif dan benar
- [ ] Project card menampilkan thumbnail nyata
- [ ] Mobile-friendly di semua section
- [ ] Meta title & description diisi untuk SEO dasar
- [ ] Favicon terpasang
