//toggle navbar-sidebar
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const button = document.getElementById("menuButton");
    menu.classList.toggle("hidden");
    button.classList.toggle("rotate-icon");
    button.textContent = menu.classList.contains("hidden") ? "☰" : "X";
  }
  
  function openModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("imageModal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      breakpoints: {
        320: { slidesPerView: "auto" },
        768: { slidesPerView: "auto" } 
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      }
    });
  });
  
  