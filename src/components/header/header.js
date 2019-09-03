

export default () => {
  function closeAllMenus() {
    const menus = document.getElementsByClassName("has-submenu");
    for (let i = 0; i < menus.length; i += 1) {
      menus[i].classList.remove("active");
    }
  }

  function toggleLanguageNav(e) {
    e.currentTarget.classList.toggle("open");
    e.currentTarget.nextElementSibling.classList.toggle("active");
  }

  function toggleMenu(e) {
    e.currentTarget.classList.toggle("open");
    e.currentTarget.nextElementSibling.classList.toggle("active");
  }

  function toggleSubMenu(e) {

    let submenu = e.currentTarget.classList;
    if (!submenu.contains("active")) {
      closeAllMenus();
      submenu.add("active");
    } else {
      closeAllMenus();
    }
  }

  var menus = document.getElementsByClassName("has-submenu");
  var burgerLanguage = document.getElementById("burger-language");
  var burgerNav = document.getElementById("burger-nav");

  burgerLanguage.addEventListener("click", function(e) {
    toggleLanguageNav(e);
  });


  burgerNav.addEventListener("click", function(e) {
    toggleMenu(e);
  });


  for (var i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", function(e) {
      toggleSubMenu(e);
    });
  }
};

