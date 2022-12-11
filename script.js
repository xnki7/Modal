'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btn_open_1 = document.querySelector('.show-modal_1');
const btn_open_2 = document.querySelector('.show-modal_2');
const btn_open_3 = document.querySelector('.show-modal_3');
const btn_close = document.querySelector('.close-modal');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btn_open_1.addEventListener('click', open);
btn_open_2.addEventListener('click', open);
btn_open_3.addEventListener('click', open);

btn_close.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('.hidden')){
            // modal.classList.add('hidden');
            // overlay.classList.add('hidden');
            close();
        }
    }
});
