const openMetales= document.querySelector('.metales');
const metales = document.querySelector('#metales');
const closeMetales = document.querySelector('#close_metales');

const openPeligrosos= document.querySelector('.peligrosos');
const peligrosos = document.querySelector('#peligrosos');
const closePeligrosos= document.querySelector('#close_peligrosos');


openMetales.addEventListener('click', (e) => {
    e.preventDefault();
    metales.classList.add('modales--show')
})

openPeligrosos.addEventListener('click', (e) => {
    e.preventDefault();
    peligrosos.classList.add('modales--show')
})

closeMetales.addEventListener('click', (e) => {
    e.preventDefault();
    metales.classList.remove('modales--show')
    
})

closePeligrosos.addEventListener('click', (e) => {
    e.preventDefault();
    
    peligrosos.classList.remove('modales--show')
})