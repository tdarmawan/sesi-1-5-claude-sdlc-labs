# Flow dummy Reset Password v2
1. Pengguna membuka form dan mengirim email (RP-001).
2. Format tidak valid: tampilkan error, kembali ke form (RP-001).
3. Format valid: tampilkan respons generik, baik akun ada maupun tidak (RP-002).
4. Akun terdaftar: sistem mengirim tautan ber-token (RP-002/RP-003).
5. Pengguna membuka tautan. Token kedaluwarsa/terpakai: tolak (RP-003).
6. Token valid: kirim password baru, tandai token terpakai (RP-004).
Pertanyaan terbuka mengikuti BRD GAP-01..03.
