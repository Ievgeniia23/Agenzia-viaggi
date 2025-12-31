const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  hero.style.setProperty("--parallax", `${scrollY * 0.4}px`);
});


// отслеживание скролла

 const nav = document.querySelector("nav");

 window.addEventListener("scroll", () => {
   if (window.scrollY > 50) {
     nav.classList.add("scrolled");
   } else {
     nav.classList.remove("scrolled");
   }
 });




// -------------tour-carousel--------------------

 $(document).ready(function () {
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
 });

//  Скрывать nav при прокрутке вниз


//    let lastScroll = 0;
//    const nav = document.querySelector("nav");

//    window.addEventListener("scroll", () => {
//      const currentScroll = window.scrollY;

//      if (currentScroll > lastScroll && currentScroll > 100) {
//        nav.style.transform = "translate(-50%, 120%)"; // уезжает вниз
//      } else {
//        nav.style.transform = "translate(-50%, 0)";
//      }

//      lastScroll = currentScroll;
//    });