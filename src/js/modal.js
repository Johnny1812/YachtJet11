document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  var mobileMenuButton = document.querySelector('.header-btn');
  var closeMobileMenuButton = document.querySelector('.header-mobile-close');
  var mobileMenu = document.querySelector('.header-mobile');

  if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
    // Open mobile menu
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.add('is-open');
    });

    // Close mobile menu
    closeMobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.remove('is-open');
    });
  }
});
