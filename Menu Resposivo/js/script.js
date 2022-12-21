

const buttonMenu = document.querySelector('.button-menu-mobile')


buttonMenu.onclick  = () => {

    let showMenu = document.querySelector('.menu-mobile')
    if (showMenu.classList.contains('open')) {
        showMenu.classList.remove('open')
    } else {
        showMenu.classList.add('open')
    }   
}