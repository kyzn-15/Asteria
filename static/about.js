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
  const desc = document.getElementById("detail-desc");

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
  var typed = new Typed("#chatBox", {
    strings: [
      "ASTERIA ada api unggun lohhh!!",
      "Kapan lagi nih nginap di sekolah sama teman teman seangkatann? ",
      "Duh aku pengen banget nontonin performance dari Jason, Yusuf, Padus dan lain lainnya..!",
    ],
    typeSpeed: 50,
    loop: true,
  });
});

// Language Options
document.addEventListener("DOMContentLoaded", function () {
  const changeLang = document.getElementById("lang");
  const langOption = document.getElementById("langOpt");
  const currentLang = changeLang.querySelector(".lang-opt");
  const options = document.querySelectorAll("#langOpt .lang-opt");

  const aboutHead = document.getElementById("about-heading");

  const about = ["Tentang Kami", "About Us", "私たちについて"];

  changeLang.onclick = () => {
    langOption.classList.toggle("show-box");
  };

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedLang = option.innerText;
      option.innerText = currentLang.innerText;
      currentLang.innerText = selectedLang;
      langOption.classList.remove("show-box");

      console.log(changeLang.innerText);

      if (changeLang.innerText == "ID") {
        aboutHead.innerText = about[0];
      } else if (changeLang.innerText == "ENG") {
        aboutHead.innerText = about[1];
      } else if (changeLang.innerText == "JP") {
        aboutHead.innerText = about[2];
      }
    });
  });
});
