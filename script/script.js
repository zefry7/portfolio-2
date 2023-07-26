let menuBurger = document.getElementsByClassName("menu-burger")[0];
let headerContentMenu = document.getElementsByClassName("header-content__menu")[0];
menuBurger.addEventListener("click", () => {
    headerContentMenu.classList.toggle("header-content__menu_visibility");
    document.body.classList.toggle("block-lock");
    menuBurger.classList.toggle("menu-burger_active");
})

window.addEventListener("resize", () => {
    if(screen.width > 768) {
        headerContentMenu.classList.remove("header-content__menu_visibility");
        document.body.classList.remove("block-lock");
    }
})