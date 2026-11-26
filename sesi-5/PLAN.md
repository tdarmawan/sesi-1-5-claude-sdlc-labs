# PLAN — acuan untuk ditinjau
Status: contoh rencana; peserta menandai persetujuannya sendiri sebelum implementasi.

| Tugas | Dasar | Bukti di browser |
|---|---|---|
| 1. Daftar Role: ID, nama, total user, status | RM-001 | Staff/Active dan Auditor/Inactive tampil |
| 2. Form Create: ID readonly, nama, status | RM-004 | Navigasi Create dan Batal bekerja |
| 3. Simpan ke data memori, tampil di tabel | RM-004 + D-05 | QA Reviewer muncul setelah Submit |
| 4. Nama kosong/duplikat, pesan di bawah field | RM-004 + D-01/02 | Staff dan Auditor ditolak |
| 5. Loading dan gagal simpan simulasi | kriteria latihan + UI brief | Submit terkunci, data tidak hilang saat gagal |
| 6. Permission menu/submenu | RM-005, Appendix A BRD | None/View Only/All Access tersedia |
| 7. Periksa enam cek, simpan catatan v1/v2 | VERIFICATION.md | Bukti aktual, bukan angka contoh |

Pertanyaan terbuka: format ID, default permission/status, mandatory field, kapitalisasi,
pesan validasi, hubungan parent-child permission, perilaku setelah simpan. Lihat NOTES.md.
