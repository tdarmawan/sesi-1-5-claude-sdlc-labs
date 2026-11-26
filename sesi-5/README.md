# Sesi 5 — HTML Prototypes & Project Tracking

Kasus: **WebTM Create New Role**. Dua screen wajib: Daftar Role dan Create New Role.
Unduh repo melalui **Code > Download ZIP**, ekstrak, lalu klik dua kali `sesi-5/index.html`.
Tidak perlu npm, server, API key, atau koneksi jaringan untuk menjalankan prototype.
Data hanya berada di memori tab; reload mengembalikan Staff (Active) dan Auditor (Inactive).

## Lab 1 — Design-to-Code (90 menit)

1. Baca [BRD](BRD.md), [brief UI](UI-BRIEF.md), dan [aturan proyek](CLAUDE.md).
2. Salin `starter.html` menjadi `index.html` **di folder kerja terpisah**. Simpan solusi asli.
3. Buka folder kerja di Claude Code. Di mode Plan, gunakan [PROMPTS.md](PROMPTS.md) tahap 1–3.
4. Tinjau lalu setujui rencana. Bangun bertahap: alur simpan, validasi/state, permission.
5. Ikuti [VERIFICATION.md](VERIFICATION.md). Isi [SCORECARD.md](SCORECARD.md) sebelum dan sesudah satu perbaikan.
6. Simpan index.html, CLAUDE.md, PLAN.md, NOTES.md. Jangan mengubah TBC menjadi keputusan produk.

| Snapshot | Keadaan | Cara melanjutkan |
|---|---|---|
| [starter.html](starter.html) | UI/navigasi, Submit belum aktif | Implementasikan alur dari PLAN.md |
| [checkpoint-01.html](checkpoint-01.html) | Role dapat disimpan; belum ada validasi | Tambah validasi dan state |
| [checkpoint-02.html](checkpoint-02.html) | Validasi, loading, kegagalan simulasi | Tambah Role Permission |
| [index.html](index.html) | Acuan akhir dengan permission dan kontrol akses demo | Jalankan enam pemeriksaan |

Untuk melanjutkan dari snapshot, salin file pilihan sebagai `index.html` di folder kerja.
Checkpoint 01 sengaja belum lulus pemeriksaan validasi; ini bahan perbandingan, bukan solusi akhir.
Role Members, Edit Role, Change Log dan login tidak diimplementasikan dalam alur wajib.

## Lab 2 — Backlog Notion (30 menit)

Ikuti [BACKLOG-LAB.md](BACKLOG-LAB.md). Gunakan [BACKLOG.csv](BACKLOG.csv) sebagai acuan/checkpoint,
dan [MEETING-NOTES.md](MEETING-NOTES.md) sebagai konteks. Semua story merujuk BRD dan mencatat dependency.
Hasil: 8 story + daftar TBC, scorecard sebelum/sesudah review. Cadangan: impor CSV atau gunakan tabel lokal.

## Lab 3 — Scheduled progress brief (30 menit)

Ikuti [SCHEDULED-TASK.md](SCHEDULED-TASK.md), data [PROGRESS-DATA.json](PROGRESS-DATA.json), dan
[contoh brief](PROGRESS-BRIEF.md). Siapkan task di akun sendiri; jalankan manual sebelum membuat jadwal.
Hasil: brief awal, brief setelah MoM baru, dan usulan perubahan untuk keputusan manusia.
Task hanya membaca sumber; tidak boleh mengubah BRD/backlog secara otomatis.

## Pengujian paket

Untuk pengelola/trainer: dari root repo dengan Node.js 22 atau lebih baru, jalankan `npm test`.
Tes tersebut memeriksa domain, snapshot dan konsistensi paket. Pengujian interaksi browser tetap mengikuti VERIFICATION.md.
