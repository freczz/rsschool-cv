let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('out');

window.addEventListener('scroll', () => {
   if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) header.classList.add('out');
   else if (scrollPosition() < lastScroll && containHide()) header.classList.remove('out');
   lastScroll = scrollPosition();
})