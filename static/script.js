// Shown up 
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
})

// Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.querySelector('.navbarv-nav');
    const hm = document.querySelector('#hamburger-menu');
  
    if (hm && navbarNav) {
      hm.onclick = () => {
        navbarNav.classList.toggle('active');
      };
      document.addEventListener('click', function (e) {
        if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
          navbarNav.classList.remove('active');
        }
      });
    }
});
  
