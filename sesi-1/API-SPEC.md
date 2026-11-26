# API spec dummy — bahan membaca, bukan layanan aktif
`POST /password-reset/request` body `{ "email": "learner@example.test" }`.
Format valid: 202 dengan pesan generik sesuai RP-002. Format tidak valid: 400 dengan error format (RP-001).
`POST /password-reset/confirm` body `{ "token": "DUMMY", "newPassword": "DUMMY" }`.
Token valid/belum dipakai/umur <30 menit: 200; token terpakai/kedaluwarsa: 400 (RP-003/004).
Semua host, akun dan token fiktif. Jangan menjalankan request ke domain perusahaan.
Kebijakan kompleksitas dan rate limit TBC; spec ini tidak menetapkan jawaban untuk gap tersebut.
