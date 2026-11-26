# Lab 3 — scheduled progress brief
1. Salin data BACKLOG.csv ke database latihan dan MEETING-NOTES.md ke halaman MoM. Hapus tanggal MoM untuk run awal.
2. Jalankan prompt berikut manual. Periksa angka terhadap PROGRESS-DATA.json dan BACKLOG.csv.
3. Di fitur penjadwalan Claude yang tersedia pada akun, buat "Brief Progres WebTM Latihan". Contoh jadwal:
   Senin–Jumat pukul 09.00, zona Asia/Jakarta. Masukkan tautan halaman sendiri; jangan pakai file lokal untuk jadwal cloud.
4. Jalankan Run now. Isi tanggal MoM menjadi tanggal latihan, jalankan lagi, bandingkan dengan checkpoint PROGRESS-BRIEF.md.
5. Tinjau tiap usulan secara manual. Bila fitur jadwal/connector tidak tersedia, jalankan prompt manual dengan data terlampir;
   catat bahwa penjadwalan belum diuji. Tidak perlu membuat cron atau server sendiri.

## Prompt task
Baca hanya halaman [LINK BACKLOG] dan [LINK MOM] serta BRD acuan [LINK BRD]. Jangan mengubah sumber.
Susun maksimal 300 kata: Progres, Prioritas (maksimal 3), Hambatan, Catatan MoM.
Setiap angka/status mencantumkan Story ID sumber; hambatan punya alasan, owner dan tindakan.
Hanya masukkan MoM bertanggal hari ini atau kemarin dalam Asia/Jakarta. Tanggal kosong/lama tidak dianggap baru.
Sebut tanggal pengambilan data. Yang tidak tersedia tulis "tidak ada data". TBC/keputusan terbuka menjadi pertanyaan.
Usulan perubahan BRD harus mencantumkan RM-ID dan Story ID dan menunggu persetujuan; jangan menulis perubahan otomatis.

## Enam cek
Empat bagian lengkap; angka cocok/ber-ID; hambatan dapat ditindaklanjuti; tanggal MoM benar;
tidak ada fakta/keputusan karangan; maksimal 300 kata dan tanggal sumber jelas.
