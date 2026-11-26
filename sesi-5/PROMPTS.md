# Prompt bertahap — kirim di Claude Code
Pilih mode Plan melalui kontrol mode yang tersedia; nama model mengikuti akun dan versi aplikasi.
Setujui rencana sebelum memberi izin edit. Perintah opsional di chat Code: `/context` untuk konteks,
`/rewind` bila tersedia untuk meninjau pemulihan; simpan cadangan file sebelum eksperimen.

## 1. Baca sumber tanpa edit
CONTEXT: Baca BRD.md, UI-BRIEF.md, CLAUDE.md dan NOTES.md.
TASK: Ringkas scope wajib, sumber tiap elemen, dan keputusan TBC.
RULES: Jangan mengubah berkas; jangan mengarang requirement.
OUTPUT FORMAT: tabel sumber, scope, pertanyaan.

## 2. Periksa aturan proyek
CONTEXT: Folder prototype, sumber di atas.
TASK: Usulkan perbaikan CLAUDE.md yang ringkas.
RULES: Bedakan keputusan demo dari aturan produk; tunggu persetujuan.
OUTPUT FORMAT: usulan perubahan dan alasan.

## 3. Plan
CONTEXT: BRD dan brief UI, starter.html disalin sebagai index.html.
TASK: Susun PLAN.md untuk dua screen, validasi/state, permission, data dummy, dan langkah uji.
RULES: Jangan edit kode; petakan RM-001/004/005; semua TBC menjadi pertanyaan.
OUTPUT FORMAT: tugas bernomor, ID requirement, cek browser, pertanyaan; tunggu persetujuan.

## 4A. Alur dasar
CONTEXT: PLAN.md yang sudah saya setujui.
TASK: Bangun daftar dan Create New Role sampai role terlihat setelah simpan.
RULES: Satu HTML, data memori; ID readonly; aturan demo diberi label. Tidak ada login/hapus.
OUTPUT FORMAT: perubahan index.html, catatan sumber, cara memeriksa.

## 4B. Validasi dan state
TASK: Tambah cek nama kosong dan duplikat Staff/Active serta Auditor/Inactive, loading dan gagal simpan simulasi.
RULES: Ikuti NOTES.md D-01..D-06; error mempertahankan form; cegah submit ganda; jangan ubah scope.
OUTPUT FORMAT: perubahan dan tiga skenario gagal untuk diuji.

## 4C. Permission
TASK: Tambah menu/submenu Appendix A dengan pilihan None, View Only, All Access.
RULES: Default TBC, relasi induk/submenu TBC; kontrol akses demo diberi label sebagai simulasi.
OUTPUT FORMAT: perubahan dan bukti pemeriksaan.

## 5. Review
TASK: Cocokkan setiap elemen dengan BRD/UI brief lalu jalankan VERIFICATION.md.
RULES: Jangan mengklaim hasil uji bila tidak dijalankan; tandai scope dan TBC; jangan edit dulu.
OUTPUT FORMAT: tabel elemen/sumber, enam cek beserta bukti dan temuan.

## 6. Iterasi
TASK: Perbaiki hanya temuan [ISI TEMUAN] setelah saya menyetujui.
RULES: Pertahankan aturan lainnya, jelaskan perubahan, jalankan ulang enam cek.
OUTPUT FORMAT: diff ringkas, hasil aktual v1/v2, NOTES.md terbaru.
