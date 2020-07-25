const us = document.getElementById('us');
const serve = document.getElementById('services');
const cont = document.getElementById('contact');
const modal = document.getElementById('myModal');
const hide = document.getElementById('close-modal');
let modalContent = document.getElementById('modal-content');


const firstBlock = () => {
  return modalContent.textContent = "Hola. Somos Limpiadores Perea. Brindamos servicios de limpieza profesional a su hogar u oficina. Somos locales de Tijuana y amamos a nuestros clientes. Esperamos tener noticias suyas para atender sus necesidades de limpieza."
}

const secondBlock = () => {
    return modalContent.textContent = "Limpiadores Perea ofrece servicios de limpieza profesionales y puntuales a la mayor parte de la ciudad de Tijuana. Somos expertos en limpieza residencial o comercial y sabemos que estara satisfecho con nuestros servicios."
}

const thirdBlock = () => {
    return modalContent.textContent = "Para obtener una estimación del costo y el tiempo de sus servicios necesarios, contáctenos a PPPerea@gmail.com o por teléfono al 664-116-0957."
}

const showModal = () => {
    modal.style.display = 'block';
}

const hideModal = () => {
    modal.style.display = "none"; 
    
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


us.addEventListener('click', () => {
    showModal();
    firstBlock();
});
serve.addEventListener('click', () => {
    showModal();
    secondBlock();
});
cont.addEventListener('click', () => {
    showModal();
    thirdBlock();
});
hide.addEventListener('click', () => {hideModal()})
