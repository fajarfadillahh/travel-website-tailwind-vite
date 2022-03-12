import "../css/index.css";

// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER ======
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCROLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 10
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);

// ===== SWIPER DISCOVER =====
let swiper = new Swiper(".discover-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===== VIDEO SECTION ====
const videoFile = document.getElementById("video-file");
const videoButton = document.getElementById("video-button");
const videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play Video
    videoFile.play();
    // We Change The Icon
    videoIcon.classList.add("bx-pause");
    videoIcon.classList.remove("bx-play");
  } else {
    // Play Video
    videoFile.pause();
    // We Change The Icon
    videoIcon.classList.remove("bx-pause");
    videoIcon.classList.add("bx-play");
  }
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
  // Video end, icon change
  videoIcon.classList.remove("bx-pause");
  videoIcon.classList.add("bx-play");
}
videoFile.addEventListener("ended", finalVideo);
