
const nav = document.querySelector("nav");
// const sidebar = document.querySelector(".sidebar");
// const hero = document.querySelector(".hero");


window.addEventListener("scroll", () => {
  

 
  
if (window.scrollY > 50) {
  nav.classList.add("is-fixed", "scrolled");
  
} else {
  nav.classList.remove("is-fixed", "scrolled");
  
}
    

  // Sidebar
  // if (sidebar && hero) {
  //   const heroHeight = hero.offsetHeight;
  //   if (scrollY > heroHeight - 100) {
  //     sidebar.classList.add("is-sticky");
  //   } else {
  //     sidebar.classList.remove("is-sticky");
  //   }
  // }
});


// Загрузка туров и инициализация слайдера
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
