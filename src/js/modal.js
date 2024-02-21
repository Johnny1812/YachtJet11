document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  const mobileMenuButton = document.querySelector('.header-btn');
  const closeMobileMenuButton = document.querySelector('.header-mobile-close');
  const mobileMenu = document.querySelector('.header-mobile');

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
