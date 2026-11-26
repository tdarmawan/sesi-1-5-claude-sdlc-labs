# Empat prompt, satu task
Jalankan tiap variasi di chat baru, simpan hasilnya.
1. "Buat acceptance criteria reset password."
2. "Buat empat acceptance criteria reset password Given–When–Then; jangan menambah fitur."
3. Prompt 2 + lampirkan BRD.md. "Setiap butir menyebut RP-ID; data yang hilang menjadi gap."
4. Prompt 3 + OUTPUT-SCHEMA.json dan satu contoh CHECKPOINT-01. "Keluarkan JSON sesuai schema."

## Review terpisah
"Periksa output terhadap BRD, USER-FLOW dan API-SPEC. Laporkan field kosong, duplikasi, sumber keliru,
asumsi dan gap; sertakan ID/bukti/risiko/rekomendasi. Jangan mengarang kebijakan. Jangan menyatakan Approved."

## Iterasi
Pilih satu temuan yang punya bukti, revisi output dan isi REVIEW-LOG. Bandingkan dua checkpoint.
Uji Skill pada draft lain yang menyatakan token berlaku 24 jam: reviewer harus menunjukkan konflik dengan RP-003.
