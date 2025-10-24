// ====== Hamburger Menu ======
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ====== Smooth Scrolling ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ====== Form Validation and Output ======
document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg = document.getElementById("messageText").value.trim();
  const resultBox = document.getElementById("resultBox");

  // Validasi kosong
  if (!name || !email || !phone || !msg) {
    alert("Harap isi semua field!");
    return;
  }

  // Validasi email
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  // Validasi nomor telepon
  const phoneRe = /^\+?\d{7,15}$/;
  if (!phoneRe.test(phone)) {
    alert("Nomor telepon tidak valid!");
    return;
  }

  // Tampilkan hasil input
  resultBox.innerHTML = `
    <h3>Data Diterima:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Nomor Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${msg}</p>
  `;

  // Ubah pesan sambutan di banner
  document.getElementById("welcome").textContent = "Hi " + name + ", Welcome To Website!";
});
