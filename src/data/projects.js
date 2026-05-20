export const projects = [
  {
    id: 1,
    title: "Sancha Internal Management System",
    subtitle: "Aplikasi Web Internal Operasional Tim",
    description: "Aplikasi web internal berbasis Laravel untuk mengelola komunikasi, arahan kerja, data customer, struktur SDM, dan catatan aktivitas harian secara terpusat.",
    longDescription: "Mengembangkan aplikasi internal management system berbasis Laravel untuk mendukung operasional tim, mencakup manajemen user dan role, pengumuman internal, task berbasis chat realtime, pengelolaan customer, struktur SDM/divisi, serta modul jurnal. Aplikasi dibangun dengan Laravel, Blade, Tailwind CSS, Laravel Reverb, dan Spatie Permission.",
    category: "Web App",
    technologies: [
      "Laravel 12",
      "Blade Template",
      "Tailwind CSS",
      "Laravel Breeze",
      "Laravel Reverb",
      "Spatie Permission",
      "MySQL",
      "Vite",
      "JavaScript"
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Fullstack" },
      { label: "Platform", value: "Web" }
    ],
    features: [
      "Authentication & User Verification (Sistem login, registrasi, verifikasi email, dan verifikasi admin)",
      "Role & Permission Management (Sistem hak akses berbasis peran dengan Spatie)",
      "Dashboard Internal (Navigasi operasional seperti whiteboard, customer, SDM, arahan, dan journal)",
      "Whiteboard / Announcement System (Pengumuman dengan dukungan like, komentar, pin, upload gambar/video, seen status)",
      "Task & Arahan System (Modul chat realtime untuk instruksi kerja, attachment, status baca)",
      "Customer Management (CRUD data customer dan foto)",
      "SDM & Division Management (Pengelolaan divisi, posisi user, lead divisi)",
      "Journal Module (Pencatatan aktivitas atau laporan khusus)",
      "Realtime Communication (Menggunakan Laravel Reverb untuk update realtime)"
    ],
    githubUrl: "https://github.com/fakerryugan/sancha",
    image: "/project-sencha.png",
    images: [
      "/project-sencha.png",
      "/sencha1.png",
      "/sencha2.png",
      "/sencha3.png",
      "/sencha4.png"
    ]
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    subtitle: "Aplikasi Web Pencatatan Fitness & Nutrisi",
    description: "Aplikasi web fitness tracker untuk memantau asupan kalori, latihan, berat badan, dan streak aktivitas harian yang dilengkapi dengan sistem approval admin.",
    longDescription: "Fitness Tracker adalah web app berbasis React, Express, dan Supabase untuk membantu pengguna memantau asupan kalori, latihan, berat badan, dan streak aktivitas harian. Aplikasi ini dilengkapi sistem registrasi dengan Supabase Auth, approval akun oleh admin, dashboard statistik komprehensif, serta fitur CRUD untuk log nutrisi dan workout.",
    category: "Web App",
    technologies: [
      "React",
      "Vite",
      "Express.js",
      "Supabase",
      "React Router",
      "Lucide React"
    ],
    stats: [
      { label: "Status", value: "In Progress" },
      { label: "Role", value: "Fullstack" },
      { label: "Platform", value: "Web" }
    ],
    features: [
      "Registrasi dan login user terintegrasi dengan Supabase Auth",
      "Sistem Approval akun oleh Admin sebelum user dapat mengakses fitur tracking",
      "Dashboard komprehensif untuk memantau progres fitness harian",
      "Pencatatan asupan kalori makanan dan minuman",
      "Pencatatan dua tipe workout: Cardio (steps/distance) dan Hypertrophy (gym set-reps)",
      "Fitur Edit, Hapus, dan Filter riwayat log berdasarkan tanggal",
      "Ringkasan progres kalori secara harian, mingguan, dan bulanan",
      "Tracking berat badan secara berkala",
      "Fitur Daily Check-in dan pemantauan Streak Harian",
      "Statistik riwayat latihan dan nutrisi yang dikelompokkan per bulan, minggu, dan hari",
      "Dashboard khusus Admin untuk memantau, menyetujui, atau menghapus akun user"
    ],
    githubUrl: "https://github.com/Adityamewmew/fitneskalori",
    image: "/fitnes.png",
    images: [
      "/fitnes.png",
      "/fitnes1.png",
      "/fitnes2.png",
      "/fitnes3.png"
    ]
  },
  {
    id: 3,
    title: "Dashboard Evaluasi Kinerja AMT",
    subtitle: "Streamlit App · Pertamina Patra Niaga",
    description: "Dashboard berbasis Streamlit untuk mengevaluasi kinerja Awak Mobil Tangki Pertamina. Mengolah data Excel mentah, menghitung KM, KL, ritase, hari kerja, serta mendeteksi anomali peran atau \"ghosting\".",
    longDescription: "Dashboard Evaluasi Kinerja AMT adalah aplikasi berbasis Streamlit yang dirancang untuk membantu proses evaluasi performa Awak Mobil Tangki di Pertamina Patra Niaga Fuel Terminal Tuban. Aplikasi ini mengolah data mentah dari file Excel, memecah data perjalanan berdasarkan peran Supir dan Kernet, lalu menghitung performa karyawan berdasarkan KM, KL, ritase, dan hari kerja. Sistem ini juga memiliki fitur validasi otomatis untuk mendeteksi indikasi \"ghosting\" atau ketidaksesuaian peran kerja. Hasil akhir ditampilkan dalam dashboard interaktif dan dapat diekspor ke Excel sebagai laporan siap pakai.",
    category: "Web App",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "OpenPyXL",
      "SQLite"
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Fullstack" },
      { label: "Platform", value: "Web App" }
    ],
    features: [
      "Upload data mentah dari file Excel, XLS, atau CSV",
      "Deteksi otomatis kolom penting (nomor polisi, supir, kernet, KM, volume/KL, tanggal)",
      "Pemisahan data trip menjadi dua peran: AMT 1 (Supir) dan AMT 2 (Kernet)",
      "Ekstraksi nama dan Nopek dari format data karyawan",
      "Penentuan jabatan aktual AMT berdasarkan mayoritas peran yang paling sering dilakukan",
      "Identifikasi nomor polisi default berdasarkan kendaraan yang paling sering digunakan",
      "Validasi otomatis untuk mendeteksi indikasi \"ghosting\" atau ketidaksesuaian peran kerja",
      "Perhitungan total KM, KL, ritase, dan hari kerja per karyawan",
      "Dashboard laporan performa bersih yang hanya menampilkan data valid",
      "Tab khusus untuk menampilkan daftar trip ghosting atau penyalahgunaan peran",
      "Laporan total gabungan untuk seluruh aktivitas AMT (valid + ghosting)",
      "Ekspor laporan lengkap ke Excel dengan sheet: laporan bersih, keseluruhan, dan log detail trip",
      "Tampilan dashboard bertema retro arcade dengan warna khas Pertamina"
    ],
    githubUrl: "https://github.com/Adityamewmew/Sistem-Pendataan-Amt",
    image: "/amt.png",
    images: [
      "/amt.png",
      "/amt1.png",
      "/amt2.png"
    ]
  },
  {
    id: 4,
    title: "Video Profil HMJBI 2025",
    subtitle: "Video Kreatif · Organisasi Kampus",
    description: "Video profil resmi Himpunan Mahasiswa Jurusan Bisnis dan Informatika (HMJBI) Poliwangi tahun 2025. Diproduksi sebagai media pengenalan organisasi kampus kepada mahasiswa baru.",
    longDescription: "Video profil resmi yang diproduksi untuk Himpunan Mahasiswa Jurusan Bisnis dan Informatika (HMJBI) Politeknik Negeri Banyuwangi tahun 2025. Video ini dirancang sebagai media pengenalan organisasi kepada mahasiswa baru, menampilkan profil himpunan, kegiatan, dan visi misi HMJBI secara visual yang menarik.",
    category: "Video Creative",
    technologies: [
      "DaVinci Resolve",
      "Adobe Premiere",
      "After Effects",
      "Videografi"
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Editor" },
      { label: "Klien", value: "HMJBI" }
    ],
    features: [
      "Produksi video profil organisasi kampus",
      "Editing dan color grading profesional",
      "Motion graphic dan title animation",
      "Penggabungan footage kegiatan himpunan"
    ],
    videos: [
      { label: "Video Profil HMJBI 2025", url: "https://youtu.be/FH6rZKw6U34?si=MwhK1xL8rQgdGXsy" }
    ]
  },
  {
    id: 5,
    title: "Safety Induction GKT Poliwangi",
    subtitle: "Video Edukasi · K3 Kampus",
    description: "Video safety induction untuk Gedung Kuliah Terpadu (GKT) Politeknik Negeri Banyuwangi. Berisi panduan keselamatan dan prosedur darurat bagi sivitas akademika.",
    longDescription: "Video safety induction resmi yang diproduksi untuk Gedung Kuliah Terpadu (GKT) Politeknik Negeri Banyuwangi. Video ini berisi panduan keselamatan kerja, prosedur evakuasi darurat, titik kumpul, dan tata tertib penggunaan fasilitas gedung bagi seluruh sivitas akademika kampus.",
    category: "Video Creative",
    technologies: [
      "DaVinci Resolve",
      "Videografi",
      "Motion Graphic"
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Editor" },
      { label: "Klien", value: "Poliwangi" }
    ],
    features: [
      "Produksi video edukasi K3 (Keselamatan & Kesehatan Kerja)",
      "Panduan prosedur evakuasi darurat gedung",
      "Visualisasi titik kumpul dan jalur evakuasi",
      "Narasi dan subtitle informatif"
    ],
    videos: [
      { label: "Safety Induction GKT Poliwangi", url: "https://drive.google.com/file/d/1kSA9oudueCjetEInDQmu6FmqN1xXRr-1/view?usp=drive_link" }
    ]
  },
  {
    id: 6,
    title: "TVRI Jemparingan",
    subtitle: "Video Dokumentasi · Liputan Media",
    description: "Video dokumentasi liputan TVRI tentang olahraga tradisional Jemparingan, menampilkan proses, suasana, dan para pelaku seni memanah tradisional khas Jawa.",
    longDescription: "Video dokumentasi yang diproduksi untuk meliput kegiatan olahraga tradisional Jemparingan yang ditayangkan di TVRI. Video ini menampilkan proses, suasana, dan para pelaku seni memanah tradisional khas Jawa secara komprehensif dengan sentuhan sinematografi yang memperlihatkan keindahan budaya lokal.",
    category: "Video Creative",
    technologies: [
      "DaVinci Resolve",
      "Videografi",
      "Color Grading"
    ],
    stats: [
      { label: "Status", value: "Completed" },
      { label: "Role", value: "Editor" },
      { label: "Klien", value: "TVRI" }
    ],
    features: [
      "Liputan dokumentasi olahraga tradisional Jemparingan",
      "Sinematografi dengan komposisi sinematik",
      "Color grading bernuansa hangat dan tradisional",
      "Editing untuk tayangan media televisi nasional"
    ],
    videos: [
      { label: "TVRI Jemparingan", url: "https://drive.google.com/file/d/1FSTLt298oh23GxWRZ4K1a3tBANq4jQp8/view?usp=drive_link" }
    ]
  }
];


