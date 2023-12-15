const modalToggle = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('modales--show');
  };
  
  //Abrir modal
  document.querySelector('.metales').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('metales');
  });
  
  document.querySelector('.peligrosos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('peligrosos');
  });
  
  document.querySelector('.vidrios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('vidrios');
  });
  
  document.querySelector('.papelCarton').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('papelCarton');
  });
  
  document.querySelector('.organicos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('organicos');
  });

  document.querySelector('.plasticos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('plasticos');
  });

  document.querySelector('.ordinarios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('ordinarios')
  });

  document.querySelector('.consejos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('consejos')
  });


  
  document.querySelector('.noReciclables').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('noReciclables')
  });
  

  //Cerrar modal
  document.getElementById('close_metales').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('metales');
  });
  
  document.getElementById('close_peligrosos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('peligrosos');
  });
  
  document.getElementById('close_vidrios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('vidrios');
  });
  
  document.getElementById('close_papelCarton').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('papelCarton');
  });
  
  document.getElementById('close_organicos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('organicos');
  });

  document.getElementById('close_plasticos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('plasticos');
  });

  document.getElementById('close_ordinarios').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('ordinarios');
  });

  document.getElementById('close_noReciclables').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('noReciclables');
  });
  
  document.getElementById('close_consejos').addEventListener('click', (e) => {
    e.preventDefault();
    modalToggle('consejos');
  });
  
  
  