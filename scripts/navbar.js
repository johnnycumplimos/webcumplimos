function handleScrollEvent () {
    const nav = document.querySelector('nav.nav_container');
    if (window.pageYOffset > 7) {
        nav.style.transition = '1s'
        nav.style.backgroundColor = 'white'
    } else {
        nav.style.backgroundColor = 'transparent'
    }
};

function toggleMenuList () {
    const menuList = document.querySelector('nav.nav_container ul.menu_list');
    menuList.classList.toggle('activate');
}


window.onload = function() {
    window.addEventListener('scroll', handleScrollEvent);
    

    /* Open mobile menu */
    const menuList = document.querySelector('nav div.menu_icon');
    const menuClose = document.querySelector('ul.menu_list li.menu_close');

    menuList.addEventListener('click', toggleMenuList);
    menuClose.addEventListener('click', toggleMenuList);

    /* END - Open mobile menu */
}