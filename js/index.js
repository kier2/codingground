const mobileToggler = document.querySelector('.mobileToggler');
const currentYearElement = document.querySelector('#current-year')

document.addEventListener('DOMContentLoaded', () => {currentYearElement.innerText = getCurrentYear()})
mobileToggler.addEventListener('click', toggleMenu);
// console.log(mobileToggler)

function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu-mobile');
    navbarMenu.classList.toggle('toggleActive');
}

function getCurrentYear(){
    const date = new Date()
    const currentYear = date.getFullYear()
    return currentYear
}