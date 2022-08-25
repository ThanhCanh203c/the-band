"use strict";

const buyBtns = document.querySelectorAll('.btn.buy-btn');
const modal = document.querySelector('.modal');
const modalBox =  document.querySelector('.modal__box');
const closeBtn = document.querySelector('.btn.close-btn');
const miniClsBtn = document.querySelector('.mini-cls-btn');

function showModal() {
    modal.style.display = 'block';
}

function resetPosition() {
    modal.style.display = 'none';
    modalBox.style.top = 40 + '%';
    modalBox.style.opacity = 1;
}

function hideModal() {
    let temp = 40;
    const k = setInterval(() => {
        temp -= 1.2;
        modalBox.style.top = temp + '%';
        if (modalBox.style.opacity > 0) modalBox.style.opacity -= 0.06;
        
        if (temp < 0) {
            clearInterval(k);
            resetPosition();
        }
    }, 10);
}

buyBtns.forEach((buyBtn) => {
    buyBtn.onclick = () => {
        showModal();
    };
});

closeBtn.onclick = () => {
    hideModal();
};

miniClsBtn.onclick = () => {
    hideModal();
}

modalBox.onclick = ((e) => {
    e.stopPropagation();
})

modal.onclick = (e) => {
    hideModal();
}

resetPosition();