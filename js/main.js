const orderBtn = document.querySelector('.selected__descr-order-btn');
const overlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal-window');
let timeoutID;

const showModal = () => {
    modal.classList.add('modal-window--visible');
    overlay.classList.add('modal-overlay--visible');
}

const hideModal = () => {
    modal.classList.remove('modal-window--visible');
    overlay.classList.remove('modal-overlay--visible');
}

const delayHide = () => {
    timeoutID = window.setTimeout(hideModal, 3000);
}

const cleanTimeout = () => {
    window.clearTimeout(timeoutID);
}

orderBtn.addEventListener('click', () => {
    
    cleanTimeout();
    showModal();
    delayHide();

    overlay.addEventListener('click', () =>{
        hideModal();
    }); 

});
