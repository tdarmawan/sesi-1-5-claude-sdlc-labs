# Stitch MCP — konfigurasi contoh tanpa kredensial
Rujukan resmi: [Stitch](https://stitch.google.com/docs/mcp/setup), [Claude MCP](https://code.claude.com/docs/en/mcp).
Contoh mengikuti environment variable expansion pada `.mcp.json`; nama menu dapat berubah.

1. Pasang Claude Code dari sumber resmi, cek `claude --version`. Buka folder proyek latihan tersendiri.
2. Buat key melalui pengaturan Stitch pada akun sendiri. Jangan menempelnya di chat/BRD/repo.
3. Salin mcp.example.json menjadi `.mcp.json` di root folder proyek latihan. Jangan menimpa konfigurasi yang sudah ada;
   bila sudah ada, tambahkan hanya entri stitch ke mcpServers yang ada.
4. Set variabel pada terminal yang akan menjalankan Claude, lalu jalankan CLI pada terminal itu.

Windows PowerShell (input disembunyikan):
```powershell
$stitchSecret = Read-Host 'Stitch API key' -AsSecureString
$env:STITCH_API_KEY = [System.Net.NetworkCredential]::new('', $stitchSecret).Password
claude mcp list
claude
```

macOS/Linux Bash (input disembunyikan):
```bash
read -rsp 'Stitch API key: ' STITCH_API_KEY; echo
export STITCH_API_KEY
claude mcp list
claude
```

5. Di chat Code ketik `/mcp`, tinjau izin konfigurasi, lalu prompt:
   "Sebut tool Stitch yang tersedia, panggil tool daftar project (mis. list_projects). Jangan membuat/mengubah project."
   Status Connected saja belum membuktikan key valid; operasi baca harus berhasil.
6. Setelah brief disetujui, gunakan PROMPTS A2–A6. Jangan menampilkan konfigurasi berisi nilai key pada layar bersama.

Koneksi tidak tersedia dalam 10 menit: pakai Claude Design atau wireframe SVG lokal dengan brief yang sama.
Ekspor melalui UI yang sudah login; bila link download desain meminta login, gunakan ekspor/screenshot manual.
Paket ini menguji format konfigurasi, bukan autentikasi live Stitch. Peserta perlu memeriksa koneksi dengan akun sendiri.
Setelah latihan, tutup terminal; cabut key demo bila tidak dipakai lagi. `.mcp.json` lokal diabaikan Git.
