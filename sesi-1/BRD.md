# BRD dummy — Reset Password v2
Dokumen simulasi latihan, tanpa data pelanggan dan kredensial nyata.
## Scope
Reset password melalui email untuk akun yang terdaftar. Login dan aturan kompleksitas password di luar latihan ini.
| ID | Requirement |
|---|---|
| RP-001 | Pengguna mengirim email melalui form permintaan reset. Email yang formatnya tidak valid menampilkan error sebelum permintaan diproses. |
| RP-002 | Respons permintaan selalu generik: "Jika email terdaftar, petunjuk reset akan dikirim." Respons tidak mengungkap keberadaan akun. |
| RP-003 | Token reset hanya sekali pakai dan berlaku 30 menit sejak diterbitkan. Token kedaluwarsa atau pernah digunakan ditolak. |
| RP-004 | Token valid memungkinkan pengguna mengirim password baru; setelah berhasil token tidak dapat digunakan ulang. |
## Belum diputuskan
GAP-01: aturan kompleksitas password. GAP-02: pembatasan frekuensi permintaan. GAP-03: invalidasi session lama.
Ketiganya memerlukan konfirmasi; jangan menambahkan perilaku final ke acceptance criteria.
