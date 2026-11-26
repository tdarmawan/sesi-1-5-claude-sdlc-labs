# Validasi paket — 26 November 2026

Pengujian logika domain dan konsistensi paket dijalankan melalui `npm test`.
Interaksi browser diperiksa pada Chrome melalui pratinjau HTTP lokal yang hanya menyajikan empat snapshot HTML.
Kode HTML tetap mandiri, tanpa import, fetch, server aplikasi, atau dependensi jaringan.

| Pemeriksaan browser | Hasil |
|---|---|
| Nama kosong | Pesan tampil; form tidak disimpan |
| Staff Active / Auditor Inactive | Keduanya ditolak sebagai duplikat |
| Loading + gagal simpan | Loading terlihat; form/nama tetap tersedia |
| Submit ulang setelah gagal | Role QA Reviewer tampil di tabel |
| Permission Roles | Pilihan View Only dapat dipilih pada form |
| Akses demo View Only / None | Create disembunyikan / menu disembunyikan dan akses ditolak |
| Daftar kosong | Empty state tersedia |
| Checkpoint 01 / 02 / starter | Simpan dasar bekerja / duplikat ditolak / Submit sengaja belum aktif |
| Console browser | Tidak ditemukan error atau warning pada pengujian |

Pembukaan `file://` tidak diotomatisasi karena kebijakan browser. Peserta dapat mengecek klik dua kali melalui VERIFICATION.md.
Koneksi live Claude/Miro/Stitch/Notion dan fitur scheduled task belum dijalankan dengan akun peserta;
paket menguji konfigurasi dan fixture lokal serta menyediakan langkah verifikasi dan cadangan manual.
Skor peserta dan approval produk sengaja tidak diisi.
