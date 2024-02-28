const ICON_MENU_CLOSE = "src/assets/images/icon/icon-menu-close.svg";
const ICON_MENU = "src/assets/images/icon/icon-menu.svg";
const ICON_DARK_MODE = 'src/assets/images/icon/icon-dark.svg';
const ICON_LIGHT_MODE = 'src/assets/images/icon/icon-light.svg'

// Toogle Menu
const toggleMenu = document.getElementById('toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menuElem = document.getElementById('menu');

toggleMenu.addEventListener('click', ()=> {
    menuElem.classList.toggle('translate-y-[-200%]');
    changeMenuIcon();
});

// Close Menu When we are clicking on Menu List

const navLinks = document.querySelectorAll('.nav-link');
for(const navlink of navLinks) {
    navlink.addEventListener('click', () => {
        menuElem.classList.remove('translate-y-[-200%]');
        changeMenuIcon();
    });
}

function changeMenuIcon() {
    const isContainTranslate = menuElem.classList.contains('translate-y-[-200%]');
    if(!isContainTranslate) {
        toggleMenuIcon.src = ICON_MENU_CLOSE;
    }else{
        toggleMenuIcon.src = ICON_MENU;
    }
}

// Toggle Dark Mode

const html = document.querySelector('html');
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');
const toggleWebsiteIcon = document.querySelector('.website');
toggleThemeIcon.addEventListener('click', ()=>{
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    if(!isDark){
        toggleThemeIcon.src = ICON_DARK_MODE;
        // TODO : changer aussi les icones du Contact/des projets et de l'icone en haut
    }else{
        toggleThemeIcon.src = ICON_LIGHT_MODE;
    }
})

