const openMetales= document.querySelector('.metales');
const metales = document.querySelector('#metales');
const closeMetales = document.querySelector('#close_metales');

const openPeligrosos= document.querySelector('.peligrosos');
const peligrosos = document.querySelector('#peligrosos');
const closePeligrosos= document.querySelector('#close_peligrosos');

const openVidrios= document.querySelector('.vidrios');
const vidrios = document.querySelector('#vidrios');
const closeVidrios = document.querySelector('#close_vidrios');

const openPapelCarton= document.querySelector('.papelCarton');
const papelCarton = document.querySelector('#papelCarton');
const closePapelCarton = document.querySelector('#close_papelCarton');


openMetales.addEventListener('click', (e) => {
    e.preventDefault();
    metales.classList.add('modales--show')
})

openPeligrosos.addEventListener('click', (e) => {
    e.preventDefault();
    peligrosos.classList.add('modales--show')
})

openVidrios.addEventListener('click', (e) => {
    e.preventDefault();
    vidrios.classList.add('modales--show')
})


openPapelCarton.addEventListener('click', (e) => {
    e.preventDefault();
    papelCarton.classList.add('modales--show')
})

closeMetales.addEventListener('click', (e) => {
    e.preventDefault();
    metales.classList.remove('modales--show')
    
})

closePeligrosos.addEventListener('click', (e) => {
    e.preventDefault();
    
    peligrosos.classList.remove('modales--show')
})

closeVidrios.addEventListener('click', (e) => {
    e.preventDefault();
    
    vidrios.classList.remove('modales--show')
})

closePapelCarton.addEventListener('click', (e) => {
    e.preventDefault();
    
    papelCarton.classList.remove('modales--show')
})