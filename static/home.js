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

  // Home page
  const aboutHead = document.getElementById("about-head");
  const aboutMore = document.getElementById("about-more");
  const stargazerDesc = document.getElementById("stargazer-desc");
  const stargazerMsct = document.getElementById("mascott-desc");

  const about = ["Tentang STARGAZERS", "About STARGAZERS"];
  const about_more = [
    "Lebih Banyak Tentang STARGAZERS",
    "More About STARGAZERS",
  ];

  const homeStargazer = [
    "(Pengamat Bintang) merupakan nama Kelompok 6 magang osis 2024. STARGAZERS menggambarkan kelompok 6 sebagai team yang akan melewati kesusahan tantangan dan memiliki semangat juang untuk bekerja dengan tekun yang tinggi sambil mengamat bintang bintang untuk mencari arahan di masa ini.",
    "(Stargazers) is the name of Group 6 in the 2024 OSIS internship program. STARGAZERS represents Group 6 as a team that will overcome challenges with a strong fighting spirit, diligently working while observing the stars to find guidance for the present.",
  ];

  const homeMsct = [
    "Astrotter adalah maskot Stargazers yang berupa berang-berang, hewan yang dikenal sangat dekat dengan alam, terutama di perairan seperti sungai dan danau. Kehadiran berang-berang ini sering kali menjadi bagian dari pengalaman berkemah, yang mencerminkan kedekatan dengan alam yang diinginkan dalam kegiatan camping night tersebut.",
    "Astrotter is the mascot of the Stargazers, represented by an otter, an animal known for its close connection with nature, especially in bodies of water like rivers and lakes. The presence of this otter often becomes part of the camping experience, reflecting the close bond with nature that is desired in the camping night activities.",
  ];

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
        stargazerDesc.innerText = homeStargazer[0];
        stargazerMsct.innerText = homeMsct[0];
        aboutHead.innerText = about[0];
        aboutMore.innerText = about_more[0];
        console.log(about_more[0])
      } else if (changeLang.innerText == "ENG") {
        stargazerDesc.innerText = homeStargazer[1];
        stargazerMsct.innerText = homeMsct[1];
        aboutHead.innerText = about[1];
        aboutMore.innerText = about_more[1];
      }
    });
  });
});
