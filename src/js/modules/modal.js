
export const modal = () => {
    const modal = document.querySelector('.modal');
    const modalTender = document.querySelector('.modal__tender');
    const modalQuestion = document.querySelector('.modal__question');
    const modalPhone = document.querySelector('.modal__phone');
    const modalBtns = document.querySelectorAll('.button');
    const tenderPlusBtn = document.querySelector('.advantages__button');

    const arrBtns = [...modalBtns, tenderPlusBtn];

    const closeModal = (elem) => {
        modal.style.display = 'none';
        elem.style.visibility = 'hidden';
    };

    arrBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(e.target.closest('.button__question')) {
                modal.style.display = 'block';
                modalQuestion.style.visibility = 'visible';
            }
            if(e.target.closest('.button__tender')) {
                modal.style.display = 'block';
                modalTender.style.visibility = 'visible';
            }
            if(e.target.closest('.button__phone')) {
                modal.style.display = 'block';
                modalPhone.style.visibility = 'visible';
            } 
        });
    }); 

    modal.addEventListener('click', (e) => {
        if(e.target.closest('.modal__close')) {
            closeModal(e.target.parentNode);
        }
    });



};