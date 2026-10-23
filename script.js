document.documentElement.classList.add('js');
// Nav solid on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 60);
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Mobile menu
const burger = document.getElementById('burger');
const links = document.getElementById('links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Gallery carousel
new Swiper('.gswiper', {
  slidesPerView: 1.15,
  spaceBetween: 16,
  centeredSlides: false,
  loop: true,
  autoplay: {delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true},
  pagination: {el: '.swiper-pagination', clickable: true},
  navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
  breakpoints: {640:{slidesPerView:2.2}, 980:{slidesPerView:3.4}, 1280:{slidesPerView:4.2}}
});

// Lightbox
GLightbox({selector: '.glightbox', touchNavigation: true, loop: true});

// Safety: reveal everything after 1.5s even if IntersectionObserver never fires
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 1500);

// Hero crossfade carousel
const hslides = document.querySelectorAll('.hero-slide');
if (hslides.length > 1) {
  let hi = 0;
  setInterval(() => {
    hslides[hi].classList.remove('on');
    hi = (hi + 1) % hslides.length;
    hslides[hi].classList.add('on');
  }, 5000);
}
