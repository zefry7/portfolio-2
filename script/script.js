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
        menuBurger.classList.remove("menu-burger_active");
    }
});

const menuLinks = document.querySelectorAll(".header-content__link[data-goto]");
menuLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const el = e.target;
        headerContentMenu.classList.remove("header-content__menu_visibility");
        document.body.classList.remove("block-lock");
        menuBurger.classList.remove("menu-burger_active");
        
        if(el.dataset.goto != "title-content") {
            const gotoBlock = document.getElementsByClassName(el.dataset.goto)[0];
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - 30;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    })
})