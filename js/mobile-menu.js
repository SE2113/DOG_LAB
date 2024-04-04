const mobileMenu = document.querySelector('.mobile-menu');
const mobileSort = document.querySelector('.mobile-sort');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const sortBtnOpen = document.querySelector('.sort-btn-open');
const sortBtnClose = document.querySelector('.sort-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const toggleSort = () => mobileSort.classList.toggle('is-open');

const disableScroll = () =>
document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

sortBtnOpen.addEventListener('click', toggleSort);
sortBtnClose.addEventListener('click', toggleSort);

menuBtnOpen.addEventListener('click', disableScroll);
menuBtnClose.addEventListener('click', disableScroll);

sortBtnOpen.addEventListener('click', disableScroll);
sortBtnClose.addEventListener('click', disableScroll);