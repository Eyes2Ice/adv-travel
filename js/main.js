// Бургер меню
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger-icon");
  const menuWrapper = document.querySelector(".nav-wrapper");
  const body = document.body;

  if (burgerButton && menuWrapper) {
    burgerButton.addEventListener("click", function () {
      // Переключаем классы активности
      menuWrapper.classList.toggle("nav-wrapper--active");
      body.classList.toggle("body--menu-opened");
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll(".nav__link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menuWrapper.classList.remove("nav-wrapper--active");
        body.classList.remove("body--menu-opened");
      });
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menuWrapper.classList.contains("nav-wrapper--active")
      ) {
        menuWrapper.classList.remove("nav-wrapper--active");
        body.classList.remove("body--menu-opened");
      }
    });
  }
});
