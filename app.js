const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".navbar__menu")
const navLogo = document.querySelector("#navbar__logo")

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
}

menu.addEventListener("click", mobileMenu)

// close mobile menu when cliking on item

const hideMobileMenu = () => {
    const menubars = document.querySelector(".is-active")
    if(window.innerWidth <= 768 && menubars){
        menu.classList.toggle("is-active")
        menuLinks.classList.remove("active")
    }
}

menuLinks.addEventListener("click", hideMobileMenu)
navLogo.addEventListener("click", hideMobileMenu)