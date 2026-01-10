
const nav = document.querySelector("nav");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const contactOpenBtn = document.querySelector(".contact-open-btn");
const contactCloseBtn = document.querySelector(".contact-close-btn");

window.addEventListener("scroll", () => {
   
if (window.scrollY > 50) {
  nav.classList.add("is-fixed", "scrolled");
  
} else {
  nav.classList.remove("is-fixed", "scrolled");
 }

});

fetch("./favourite-tours.json")
  .then((response) => response.json())
  .then((tours) => {
    const carousel = document.querySelector(".tour-carousel");
    if (carousel) {
      tours.forEach((tour) => {
        carousel.innerHTML += `
          <div class="tour-card">
            <img src="${tour.img}" alt="${tour.title}" />
            <h3>${tour.title}</h3>
            <p>${tour.description}</p>
          </div>
        `;
      });
      initSlider();
    }
  })
  .catch((err) => console.error("Errore di caricamento:", err));

function initSlider() {
  $(".tour-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
// <!-- ------------------MODAL NAVIGATION--------------------- -->

openBtn.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("is-open");
});

nav.addEventListener("click", (e) => {
  if (e.target === nav) {
      nav.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    nav.classList.remove("is-open");
  }
});

// ------------------------MODAL SIDEBAR------------
contactOpenBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("is-open");
    contactOpenBtn.setAttribute("aria-expanded", "true");
  }
});

contactCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("is-open");
  contactOpenBtn.setAttribute("aria-expanded", "false");
});

sidebar.addEventListener("click", (e) => {
  if (window.innerWidth <= 768 && e.target === sidebar) {
    sidebar.classList.remove("is-open");
    contactOpenBtn.setAttribute("aria-expanded", "false");
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  nav.classList.remove("is-open");

  if (window.innerWidth <= 768) {
    sidebar.classList.remove("is-open");
    contactOpenBtn.setAttribute("aria-expanded", "false");
  }
});
// ------------------DATE VALIDATION-----------------
const dateInput = document.querySelector("#visit-date");

if (dateInput) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");

  const todayISO = `${yyyy}-${mm}-${dd}`;
  dateInput.min = todayISO;
}
