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
    navlink.addEventListener('click', ()=>{
        menuElem.classList.add('translate-y-[-200%]');
        changeMenuIcon();
    });
}

function changeMenuIcon() {
    const isContainTranslate = menuElem.classList.contains('translate-y-[-200%]')
    if(!isContainTranslate) {
        toggleMenuIcon.src = 'src/assets/images/icon/icon-menu-close.svg'
    }else{
        toggleMenuIcon.src = 'src/assets/images/icon/icon-menu.svg'
    }
}

// Toggle Dark Mode

const html = document.querySelector('html');
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');
toggleThemeIcon.addEventListener('click', ()=>{
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    if(!isDark){
        toggleThemeIcon.src = 'src/assets/images/icon/icon-dark-mode.svg'
        // TODO : changer aussi les icones du Contact/des projets et de l'icone en haut
    }else{
        toggleThemeIcon.src = 'src/assets/images/icon/icon-light-mode.svg'
    }
})

