# Flow checkpoint v2 — Create New Role

| Aktor | Langkah | Keputusan | Exception / cabang | Rujukan ID |
|---|---|---|---|---|
| Super admin | N01 Mulai: buka Access Control > Roles | Akses Roles? | None → N02; View Only → N03; All Access → N04 | RM-001/RM-005 |
| Sistem | N02 Tolak akses dan Akhir | — | Menu tidak ditampilkan; mekanisme redirect produk di luar prototype | RM-005 |
| Sistem | N03 Daftar read-only dan Akhir | — | Create/Edit tidak tampil | RM-005 |
| Sistem | N04 Tampilkan Daftar Role + Create New Role | — | — | RM-001 |
| Super admin | N05 Klik Create New Role | — | — | RM-001/RM-004 |
| Super admin | N06 Isi nama, permission, status lalu Submit | — | Default/mandatory masih TBC | RM-004/RM-005 |
| Sistem | N07 Periksa nama terhadap role Active/Inactive | Duplikat? | Ya → N08; tidak → N09 | RM-004 |
| Sistem | N08 Pesan validasi dan kembali N06 | — | Teks pesan TBC; input dipertahankan sebagai aturan demo | RM-004; UI brief latihan |
| Sistem | N09 Generate ID dan simpan role | — | Format ID dan kegagalan penyimpanan produk TBC | RM-004 |
| Sistem | N10 Akhir: role tersimpan | — | Navigasi sesudah simpan TBC | RM-004 |

Cek manual setiap cabang; TBC tidak dilengkapi dengan keputusan karangan.
