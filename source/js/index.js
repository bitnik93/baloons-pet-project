import data from './data.js'
import {PROCENT} from './data.js'
const mediaQuery = window.matchMedia('(max-width: 375px');
const actionButton = document.querySelector('.event-container__button');
const mainNavList = document.querySelector('.main-nav-list')
// список навигации
const NavList = document.querySelector('.store-nav-list')

// кнопка скролла наверх
const scrollToTopButton = document.querySelector('.scroll-to-start');

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


// dataKeys
const dataKeys = Object.keys(data);

// console.log(window.location.pathname)
// Лидеры продаж
const leadersList = document.querySelector('.leaders-list');
const leadersItems = leadersList.querySelectorAll('.container-list__item');

// Акции
const promotionList = document.querySelector('.promotion-list');
const promotionItems = promotionList.querySelectorAll('.container-list__item');


// productInfoData
let productInfo;


const onClickHanlder = (evt) => {
  window.location.href = 'product.html';
  let article = evt.target.closest('li').dataset.article;
  productInfo = data[article];
  localStorage.setItem('productData', JSON.stringify(productInfo));
}

leadersList.addEventListener('click', onClickHanlder);
promotionList.addEventListener('click', onClickHanlder);

const priceAndDescItemsFn = (items, data) => {
  items.forEach((item)=> {
    const article  = item.dataset.article;
    const newPrice = item.querySelector('.container-list__price');
    const oldPrice = item.querySelector('.container-list__old-price');
    const procent = item.querySelector('.container-list__procent');
    const desc = item.querySelector('.container-list__desc');
    desc.textContent = data[article].articleName;
      newPrice.textContent = data[article].price - (data[article].price * (PROCENT / 100))  + 'p';
      oldPrice.textContent = data[article].price  + 'p';
    if (data[article].discount) {
      newPrice.textContent = data[article].price - (data[article].price * (PROCENT / 100)) + 'p';
      procent.textContent = PROCENT + ' %';
      procent.style.display = 'flex';
    } else {
      newPrice.textContent = data[article].price  + 'p';
      procent.style.display = 'none';
      oldPrice.style.display = 'none';
    }
  })
}

priceAndDescItemsFn(leadersItems, data);
priceAndDescItemsFn(promotionItems, data);


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

NavList.addEventListener('click', (e) => {
  e.preventDefault();
  const link = e.target.dataset.link;
  scrollToSection(link)
})

// функия скролла наверх
function scrollToTop(button) {
  button.style.display = 'block'
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


//функция появления кнопки скролла
function onShowSCrollButton (button) {
  button.style.display = 'block';
  button.addEventListener('click', () => {
    scrollToTop(button)
  })
}


//функция определения позиции по оси Y
function getYPosition() {
  let positionY = window.scrollY || window.pageYOffset;
  positionY >= 770 ? (onShowSCrollButton(scrollToTopButton)) : (scrollToTopButton.style.display = 'none');
}

document.addEventListener('scroll', getYPosition)
// }
