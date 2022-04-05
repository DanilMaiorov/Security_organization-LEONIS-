export function burger () {
    const burgerOpen = document.querySelector('.burger');
    const burgerLinks = document.querySelectorAll('.burger-content__menu-link');
    const burgerContent = document.querySelector('.burger-content');
    const burgerClose = document.querySelector('.close-burger');
    const burgerBody = document.querySelector('.burger-content__menu-list');

    burgerOpen.addEventListener('click', () => {
        burgerBody.classList.toggle('active-list');
    });
    burgerOpen.addEventListener('click', () => {
        burgerContent.style.display = 'block';
    });
    burgerLinks.forEach(item => {
        item.addEventListener('click', () => {
            burgerContent.style.display = 'none';
        });
    });
    burgerClose.addEventListener('click', () => {
        burgerContent.style.display = 'none';      
    }); 
}
