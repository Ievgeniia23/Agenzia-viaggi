
const nav = document.querySelector("nav");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

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
        breakpoint: 1110,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 910,
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
    // клик именно по nav, а не по ul или li
    nav.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    nav.classList.remove("is-open");
  }
});

