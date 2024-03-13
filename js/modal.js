// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnClose.addEventListener('click', toggleModal);
// modalBtnOpen.addEventListener('click', toggleModal);

const modalBackdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');
const fixBlocks = document.querySelectorAll('.fix-block');

const disableBodyScroll = () => {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = paddingOffset;
  fixBlocks.forEach(el => (el.style.paddingRight = paddingOffset));
};
const enableBodyScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = 0;
  fixBlocks.forEach(el => (el.style.paddingRight = 0));
};
const toggleModal = () => {
  modalBackdrop.classList.toggle('is-hidden');
  if (!modalBackdrop.classList.contains('is-hidden')) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }
};
const closeModal = () => {
  modalBackdrop.classList.add('is-hidden');
  enableBodyScroll();
};
const closeModalIfClickedOutside = event => {
  if (!modal.contains(event.target) && !modalBtnOpen.contains(event.target)) {
    closeModal();
  }
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
document.addEventListener('click', closeModalIfClickedOutside);

