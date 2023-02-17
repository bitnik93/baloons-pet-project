
const mediaQuery = window.matchMedia('(max-width: 375px');
const actionButton = document.querySelector('.event-container__button');
const mainNavList = document.querySelector('.main-nav-list')
// кнопка бургер

const burgerButton = document.querySelector('.main-nav__mobile-button');

// $(function() {
//   $('.container-list--carousel').slick({
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     variableWidth: true,
//     prevArrow: false,
//     nextArrow: false,
//   });
// });

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



if (window.location.pathname === '/') {

  const data = {
    'baloons1' : {
        name : 'baloons1',
        url : '#',
        image : 'img/top-seller-img-1.jpg',
        price: 1000,
        code: 378394,
        count: 0,
        discount: true,
        smallPhoto: [
            'img/top-seller-img-1-small-1.jpg',
            'img/top-seller-img-1-small-2.jpg',
            'img/top-seller-img-1-small-3.jpg',
            'img/top-seller-img-1-small-4.jpg',
            'img/top-seller-img-1-small-5.jpg',
        ]
    },
    'baloons2' : {
        name : 'baloons2',
        url : '#',
        image : 'img/top-seller-img-2.jpg',
        price: 1500,
        count: 0,
        code: 367277,
        discount: false,
        smallPhoto: [
            'img/top-seller-img-2-small-1.jpg',
            'img/top-seller-img-2-small-2.jpg',
            'img/top-seller-img-2-small-3.jpg',
            'img/top-seller-img-2-small-4.jpg',
            'img/top-seller-img-2-small-5.jpg',
        ]
    },
    'baloons3' : {
        name : 'baloons3',
        url : '#',
        image : 'img/top-seller-img-3.jpg',
        price: 2000,
        discount: false,
        count: 0,
        code: 389009,
        smallPhoto: [
          'img/top-seller-img-3-small-1.jpg',
          'img/top-seller-img-3-small-2.jpg',
          'img/top-seller-img-3-small-3.jpg',
          'img/top-seller-img-3-small-4.jpg',
          'img/top-seller-img-3-small-5.jpg',
      ]
    },
    'baloons4' : {
        name : 'baloons4',
        url : '#',
        image : 'img/top-seller-img-4.jpg',
        price: 2500,
        discount: true,
        count: 0,
        code: 367288,
        smallPhoto: [
          'img/top-seller-img-4-small-1.jpg',
          'img/top-seller-img-4-small-2.jpg',
          'img/top-seller-img-4-small-3.jpg',
          'img/top-seller-img-4-small-4.jpg',
          'img/top-seller-img-4-small-5.jpg',
      ]
    },
    'baloons5' : {
        name : 'baloons5',
        url : '#',
        image : 'img/top-seller-img-5.jpg',
        price: 3000,
        discount: false,
        count: 0,
        code: 267683,
        smallPhoto: [
          'img/top-seller-img-5-small-1.jpg',
          'img/top-seller-img-5-small-2.jpg',
          'img/top-seller-img-5-small-3.jpg',
          'img/top-seller-img-5-small-4.jpg',
          'img/top-seller-img-5-small-5.jpg',
      ]
    },
    'baloons6' : {
        name : 'baloons6',
        url : '#',
        image : 'img/stocks-img-1.jpg',
        price: 3500,
        discount: false,
        count: 0,
        code: 478973,
        smallPhoto: [
          'img/stocks-img-1-small-1.jpg',
          'img/stocks-img-1-small-2.jpg',
          'img/stocks-img-1-small-3.jpg',
          'img/stocks-img-1-small-4.jpg',
          'img/stocks-img-1-small-5.jpg',
      ]
    },
    'baloons7' : {
        name : 'baloons7',
        url : '#',
        image : 'img/stocks-img-2.jpg',
        price: 4000,
        discount: false,
        count: 0,
        code: 843997,
        smallPhoto: [
          'img/stocks-img-2-small-1.jpg',
          'img/stocks-img-2-small-2.jpg',
          'img/stocks-img-2-small-3.jpg',
          'img/stocks-img-2-small-4.jpg',
          'img/stocks-img-2-small-5.jpg',
      ]
    },
    'baloons8' : {
        name : 'baloons8',
        url : '#',
        image : 'img/stocks-img-3.jpg',
        price: 4500,
        discount: true,
        count: 0,
        code: 478999,
        smallPhoto: [
          'img/stocks-img-3-small-1.jpg',
          'img/stocks-img-3-small-2.jpg',
          'img/stocks-img-3-small-3.jpg',
          'img/stocks-img-3-small-4.jpg',
          'img/stocks-img-3-small-5.jpg',
      ]
    },
    'baloons9' : {
        name : 'baloons9',
        url : '#',
        image : 'img/stocks-img-4.jpg',
        price: 5000,
        discount: true,
        count: 0,
        code: 393373,
        smallPhoto: [
          'img/stocks-img-4-small-1.jpg',
          'img/stocks-img-4-small-2.jpg',
          'img/stocks-img-4-small-3.jpg',
          'img/stocks-img-4-small-4.jpg',
          'img/stocks-img-4-small-5.jpg',
      ]
    },
    'baloons10' : {
        name : 'baloons10',
        url : '#',
        image : 'img/stocks-img-5.jpg',
        price: 5500,
        discount: false,
        count: 0,
        code: 392923,
        smallPhoto: [
          'img/stocks-img-5-small-1.jpg',
          'img/stocks-img-5-small-2.jpg',
          'img/stocks-img-5-small-3.jpg',
          'img/stocks-img-5-small-4.jpg',
          'img/stocks-img-5-small-5.jpg',
      ]
    }
  }

// dataKeys
const dataKeys = Object.keys(data);

console.log(window.location.pathname)
// Лидеры продаж
const leadersList = document.querySelector('.leaders-list');
const leadersItems = leadersList.querySelectorAll('.container-list__item');

// Акции
const promotionList = document.querySelector('.promotion-list');
const promotionItems = promotionList.querySelectorAll('.container-list__item');

// PROCENT
const PROCENT = 23;

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
      newPrice.textContent = data[article].price - (data[article].price * (PROCENT / 100));
      oldPrice.textContent = data[article].price;
    if (data[article].discount) {
      newPrice.textContent = data[article].price - (data[article].price * (PROCENT / 100));
      procent.textContent = PROCENT + ' %';
      procent.style.display = 'flex';
    } else {
      newPrice.textContent = data[article].price;
      procent.style.display = 'none';
      oldPrice.style.display = 'none';
    }
  })
}

priceAndDescItemsFn(leadersItems, data);
priceAndDescItemsFn(promotionItems, data);

}
