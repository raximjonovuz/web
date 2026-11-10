document.addEventListener('DOMContentLoaded', () => {
  // 1. Dark/Light Mode Toggle
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Saqlangan mavzuni olish
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'light');
    }
  });

  // 2. Server diagnostikasi va parametrlarini ko'rsatish
  const clientHost = document.getElementById('clientHost');
  const clientTime = document.getElementById('clientTime');
  const loadSpeed = document.getElementById('loadSpeed');
  const currentYear = document.getElementById('currentYear');

  // Joriy manzil
  const protocol = window.location.protocol;
  const host = window.location.host || 'Lokal fayl tizimi';
  clientHost.textContent = `${protocol}//${host}`;

  // Joriy vaqt (real vaqtda yangilanadi)
  function updateTime() {
    const now = new Date();
    clientTime.textContent = now.toLocaleTimeString() + ' | ' + now.toLocaleDateString();
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Yuklanish tezligi
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = (perfData.loadEventEnd - perfData.navigationStart) / 1000;
    loadSpeed.textContent = pageLoadTime > 0 ? `${pageLoadTime.toFixed(2)} soniya` : '< 0.1 soniya';
  });

  // Yilni o'rnatish
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // 3. Interaktiv hisoblagich tugmasi
  const testBtn = document.getElementById('testBtn');
  const clickCount = document.getElementById('clickCount');
  let count = 0;

  testBtn.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
    testBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      testBtn.style.transform = 'none';
    }, 100);
  });

  // 4. Aloqa formasi tekshiruvi (Demo)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Rahmat, ${name}! Xabaringiz qabul qilindi (Frontend demo).`);
    contactForm.reset();
  });
});
