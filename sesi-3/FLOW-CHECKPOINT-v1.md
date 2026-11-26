# Flow checkpoint v1 — belum lengkap — Create New Role

| Aktor | Langkah | Keputusan | Exception / cabang | Rujukan ID |
|---|---|---|---|---|
| Sistem | N04 Tampilkan Daftar Role + Create New Role | — | — | RM-001 |
| Super admin | N05 Klik Create New Role | — | — | RM-001/RM-004 |
| Super admin | N06 Isi nama, permission, status lalu Submit | — | Default/mandatory masih TBC | RM-004/RM-005 |
| Sistem | N07 Periksa nama terhadap role Active/Inactive | Duplikat? | Ya → N08; tidak → N09 | RM-004 |
| Sistem | N08 Pesan validasi dan kembali N06 | — | Teks pesan TBC; input dipertahankan sebagai aturan demo | RM-004; UI brief latihan |
| Sistem | N09 Generate ID dan simpan role | — | Format ID dan kegagalan penyimpanan produk TBC | RM-004 |
| Sistem | N10 Akhir: role tersimpan | — | Navigasi sesudah simpan TBC | RM-004 |

Temuan sengaja: jalur hak akses View Only/None dan titik Mulai belum lengkap. Jangan gunakan sebagai final.
