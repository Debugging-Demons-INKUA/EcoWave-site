const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modales');

const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modales--show')
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modales--show')
})