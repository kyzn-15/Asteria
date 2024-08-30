// Shown up
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
});

// Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navbarNav = document.querySelector(".navbarv-nav");
  const hm = document.querySelector("#hamburger-menu");

  if (hm && navbarNav) {
    hm.onclick = () => {
      navbarNav.classList.toggle("active");
    };
    document.addEventListener("click", function (e) {
      if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }
});

// Detail Activities
function showDetail(eventName, classEvent, descEvent) {
  document.getElementById("detail").style.display = "block";
  const heading = document.getElementById("detail-heading");
  const logo = document.getElementById("detail-logo");
  const desc = document.getElementById("detail-desc")

  heading.innerText = eventName;
  logo.className = classEvent;
  desc.innerText = descEvent;
}

function closeDetail() {
  document.getElementById("detail").style.display = "none";
}

// Chat Box Mascott
document.addEventListener("DOMContentLoaded", function () {
  const mascot = document.getElementById("chat-mascott");
  const chatBox = document.getElementById("chatBox");

  mascot.onclick = () => {
    chatBox.classList.toggle("show-box");
  };
  var typed = new Typed('#chatBox', {
    strings: ['Rhasya kece banget anjir sigma skibidi toilet.', 'Kevin pro player epep dan pabji', 'Syahdan alpha male -999 aura'],
    typeSpeed: 50,
    loop : true
  });

});
