document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var closeButton = document.querySelector('.x-button');
    var sideMenu = document.getElementById('sideMenu');
  
    hamburgerButton.addEventListener('click', function () {
      toggleMenu();
    });
  
    closeButton.addEventListener('click', function () {
      toggleMenu();
    });
  
    function toggleMenu() {
      if (sideMenu.style.left === '-100%' || !sideMenu.style.left) {
        sideMenu.style.left = '0';
      } else {
        sideMenu.style.left = '-100%';
      }
    }
  });
  

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-back',
    }
  });