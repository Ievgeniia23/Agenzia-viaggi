const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  hero.style.setProperty("--parallax", `${scrollY * 0.4}px`);
});


// ---------------- NAV SCROLL -----------------

 const nav = document.querySelector("nav");

 window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {
     nav.classList.add("scrolled");
   } else {
     nav.classList.remove("scrolled");
   }
 });



// -------------tour-carousel--------------------

fetch("./favourite-tours.json")
  .then((response) => response.json())
  .then((tours) => {
    const carousel = document.querySelector(".tour-carousel");

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
  })
  .catch((err) => console.error("Errore di caricamento:", err));


//  $(document).ready(function () {
//    $(".tour-carousel").slick({
//      slidesToShow: 3,
//      slidesToScroll: 1,
//      dots: true,
//      arrows: true,
//      infinite: true,
//      autoplay: true,
//      autoplaySpeed: 3000,
//      responsive: [
//        {
//          breakpoint: 768,
//          settings: {
//            slidesToShow: 1,
//          },
//        },
//      ],
//    });
//  });

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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}