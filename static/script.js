document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver untuk animasi elemen muncul
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  // Splash Screen Animations
  const intro = document.querySelector('.intro');
  const logoSpan = document.querySelectorAll('.logo');

  if (intro && logoSpan.length) {
      setTimeout(() => {
          logoSpan.forEach((span, idx) => {
              setTimeout(() => {
                  span.classList.add('active');
              }, (idx + 1) * 400);
          });
      }, 500);

      setTimeout(() => {
          logoSpan.forEach((span, idx) => {
              setTimeout(() => {
                  span.classList.remove('active');
                  span.classList.add('fade');
              }, (idx + 1) * 50);
          });
      }, 2000);

      setTimeout(() => {
          intro.style.opacity = '0';
      }, 2300);

      setTimeout(() => {
          intro.style.display = 'none';
      }, 3300);
  }

  // Toggle Navbar
  const navbarNav = document.querySelector('.navbarv-nav');
  const hm = document.querySelector('#hamburger-menu');

  if (hm && navbarNav) {
      hm.onclick = () => {
          navbarNav.classList.toggle('active');
      };
      document.addEventListener('click', (e) => {
          if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
              navbarNav.classList.remove('active');
          }
      });
  }

  // Chat Box Mascott
  const mascot = document.getElementById('chat-mascott');
  const chatBox = document.getElementById('chatBox');

  if (mascot && chatBox) {
      mascot.onclick = () => {
          chatBox.classList.toggle('show-box');
      };
      new Typed('#chatBox', {
          strings: [
              'ASTERIA ada api unggun lohhh!!',
              'Kapan lagi nih nginap di sekolah sama teman teman seangkatann?',
              'Duh aku pengen banget nontonin performance dari Jason, Yusuf, Padus dan lain lainnya..di event Asteria!',
              'Jangan lupa buang sampah pada tempatnya ya teman-teman !',
          ],
          typeSpeed: 50,
          loop: true,
      });
  }
});
