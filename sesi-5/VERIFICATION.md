# Verifikasi prototype akhir
Mulai dari index.html baru/reload. Data awal: Staff Active, Auditor Inactive.

| No | Pemeriksaan | Langkah dan hasil yang harus tampak |
|---|---|---|
| 1 | Dasar tiap elemen | Cocokkan PLAN.md, komentar RM dan UI-BRIEF; kontrol simulasi ditandai sebagai lab |
| 2 | Alur selesai | Create > QA Reviewer > Active > Submit. Loading lalu role tampil di daftar, total user 0 |
| 3 | Nama kosong dan duplikat | Coba kosong, Staff, Auditor. Muncul pesan, form tetap terbuka, jumlah role tidak bertambah |
| 4 | Loading dan error | Centang Gagalkan satu penyimpanan; isi nama unik/status. Loading terlihat, gagal mempertahankan form. Submit lagi berhasil |
| 5 | Scope/TBC | Tidak ada login/hapus; TBC tampak dan tercatat di NOTES.md. Permission default tetap belum dipilih |
| 6 | Jalan langsung | Klik dua kali index.html, navigasi dan submit bekerja; tidak ada error console atau dependensi jaringan |

Tambahan: setiap menu/submenu menyediakan tiga akses. Ubah akses demo ke View Only (Create hilang)
dan None (entrypoint hilang, akses ditolak). Coba daftar kosong dan keyboard Tab. Muat ulang untuk reset.
Uji duplikat kapitalisasi dan karakter terlarang mengikuti aturan **demo** D-02/D-03, bukan keputusan BRD.
Checkpoint 01 belum memenuhi cek 3/4/5; jangan melaporkannya sebagai solusi akhir.
