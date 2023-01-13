const mediaQuery = window.matchMedia('(max-width: 375px');
const actionButton = document.querySelector('.event-container__button');
const mainNavList = document.querySelector('.main-nav-list')
// кнопка бургер

const burgerButton = document.querySelector('.main-nav__mobile-button');

$(function() {
  $('.container-list--carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
  });
});

const changeTextButton = (e) => {
  if (e.matches) {
    actionButton.textContent = 'Покажите!';
    actionButton.style.width = '133px';
  } else {
    actionButton.textContent = 'Все акции'
  }
}

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('main-nav__mobile-button--opened')
  burgerButton.classList.toggle('main-nav__mobile-button--closed')
  mainNavList.classList.toggle('main-nav-list--opened')
  mainNavList.classList.toggle('main-nav-list--closed')

})

mediaQuery.addEventListener('change', changeTextButton)

