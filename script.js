// ====== EDIT BAGIAN INI SAJA ======
const PROFIL = {
  email: "nurulanisah604@gmail.com",
  sosial: [
    { nama: "LinkedIn", url: "https://www.linkedin.com/in/nurul-anisah-07b81721b" }
    // Tambahkan GitHub kalau ada: { nama: "GitHub", url: "https://github.com/usernamekamu" }
  ]
};

const PENGALAMAN = [
  { judul: "Quality Control", perusahaan: "PT Neural Technologies Indonesia, Jakarta", periode: "Jul 2025 – sekarang", kategori: "QA",
    deskripsi: "Membuat test case, menguji manual, dan mendokumentasikan bug. Menyiapkan dokumen UAT, menyusun laporan mingguan atau sprint, dan memastikan hasil uji sesuai standar kualitas perusahaan." },
  { judul: "Software Tester", perusahaan: "PT Neural Technologies Indonesia, Jakarta", periode: "Okt 2023 – Jul 2025", kategori: "QA",
    deskripsi: "Menyusun dan menjalankan test case dari kebutuhan sistem, melaporkan bug secara terstruktur, mendukung UAT, dan berkolaborasi dengan developer serta product manager." },
  { judul: "Odoo Developer (magang)", perusahaan: "PT Neural Technologies Indonesia, Jakarta", periode: "Jun – Sep 2023", kategori: "Pengembangan",
    deskripsi: "Mengembangkan dan menyesuaikan modul ERP berbasis Odoo, menambah fitur baru, dan memperbaiki bug sesuai proses bisnis perusahaan." },
  { judul: "Mobile App Developer (magang virtual)", perusahaan: "PT Bank Mandiri (Persero) Tbk. x Rakamin Academy", periode: "Sep 2023", kategori: "Pengembangan",
    deskripsi: "Mengerjakan proyek aplikasi mobile dari desain, implementasi fitur, sampai pengujian sesuai kebutuhan pengguna." },
  { judul: "Magang Dokumen ISO", perusahaan: "PT Arkananta Nityasa Indonesia, Bekasi", periode: "Des 2022", kategori: "Dokumentasi",
    deskripsi: "Menyiapkan dan memelihara dokumen ISO, mengendalikan versi dokumen, dan mendukung audit internal maupun eksternal." }
];

const PENDIDIKAN = [
  { judul: "Bachelor of Computer Science", perusahaan: "Universitas Bina Nusantara, Jakarta", periode: "Nov 2024", deskripsi: "" },
  { judul: "Diploma in Computer Science", perusahaan: "Politeknik Negeri Bandung", periode: "Agu 2021 – Agu 2024", deskripsi: "IPK 3,32 dari 4,00" },
  { judul: "Sertifikasi", perusahaan: "Software Quality Assurance dan IT Audit", periode: "", deskripsi: "" }
];

const KEAHLIAN = ["Test case", "Manual testing", "Bug tracking", "UAT dokumen", "Agile", "Katalon", "Selenium",
  "Microsoft Excel", "Microsoft Word", "Public speaking", "Time management"];
// ==================================

const $ = (id) => document.getElementById(id);
const baris = (p) => `
  <li><div class="item">
    <h3>${p.judul}</h3><span class="tag">${p.periode || p.kategori || ""}</span>
    <p>${p.perusahaan}</p>${p.deskripsi ? `<p>${p.deskripsi}</p>` : ""}
  </div></li>`;

// Pengalaman + filter kategori
function tampilkan(kat = "Semua") {
  $("daftar").innerHTML = PENGALAMAN
    .filter((p) => kat === "Semua" || p.kategori === kat).map(baris).join("");
}
const semuaKat = ["Semua", ...new Set(PENGALAMAN.map((p) => p.kategori))];
$("filter").innerHTML = semuaKat
  .map((t, i) => `<button type="button" aria-pressed="${i === 0}">${t}</button>`).join("");
$("filter").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  [...$("filter").children].forEach((b) => b.setAttribute("aria-pressed", b === e.target));
  tampilkan(e.target.textContent);
});
tampilkan();

$("edu").innerHTML = PENDIDIKAN.map(baris).join("");
$("skill").innerHTML = KEAHLIAN.map((s) => `<li>${s}</li>`).join("");
$("sosial").innerHTML = PROFIL.sosial
  .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.nama}</a>`).join("");

// Form kontak: membuka aplikasi email (GitHub Pages tidak punya server)
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const isi = `${f.get("pesan")}\n\nDari: ${f.get("nama")} (${f.get("email")})`;
  location.href = `mailto:${PROFIL.email}?subject=${encodeURIComponent("Pesan dari portofolio")}&body=${encodeURIComponent(isi)}`;
});

// Tema terang/gelap (diingat di browser)
const root = document.documentElement;
try { const t = localStorage.getItem("tema"); if (t) root.dataset.tema = t; } catch {}
$("tema").addEventListener("click", () => {
  const gelap = getComputedStyle(root).getPropertyValue("--bg").trim() === "#14201f";
  root.dataset.tema = gelap ? "terang" : "gelap";
  try { localStorage.setItem("tema", root.dataset.tema); } catch {}
});

$("tahun").textContent = new Date().getFullYear();
