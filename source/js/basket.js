
if (window.location.pathname === '/basket.html') {
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
        code: 389009
    },
    'baloons4' : {
        name : 'baloons4',
        url : '#',
        image : 'img/top-seller-img-4.jpg',
        price: 2500,
        discount: true,
        count: 0,
        code: 367288
    },
    'baloons5' : {
        name : 'baloons5',
        url : '#',
        image : 'img/top-seller-img-5.jpg',
        price: 3000,
        discount: false,
        count: 0,
        code: 267683
    },
    'baloons6' : {
        name : 'baloons6',
        url : '#',
        image : 'img/top-seller-img-1.jpg',
        price: 3500,
        discount: false,
        count: 0,
        code: 478973
    },
    'baloons7' : {
        name : 'baloons7',
        url : '#',
        image : 'img/top-seller-img-2.jpg',
        price: 4000,
        discount: false,
        count: 0,
        code: 843997
    },
    'baloons8' : {
        name : 'baloons8',
        url : '#',
        image : 'img/top-seller-img-3.jpg',
        price: 4500,
        discount: true,
        count: 0,
        code: 478999
    },
    'baloons9' : {
        name : 'baloons9',
        url : '#',
        image : 'img/top-seller-img-4.jpg',
        price: 5000,
        discount: true,
        count: 0,
        code: 393373
    },
    'baloons10' : {
        name : 'baloons10',
        url : '#',
        image : 'img/top-seller-img-5.jpg',
        price: 5500,
        discount: false,
        count: 0,
        code: 392923
    }
  }
// отрисовка товаров
  const template = document.querySelector('#basket-item').content;
  const TemplateItem = template.querySelector('.basket-list__item');
  const basket = document.querySelector('.basket-list');


  let totalItemPrice = document.querySelector('.basket-list__price-item-total')
  let newTotalItemPrice = null;

//общая стоимость продуктов
  let totalSum = document.querySelector('.total-container__sum');

  const localStorageList = Object.keys(localStorage);
const products = [];
const basketStorage = {};
const basketGoodsAmount = {};
// фильтрация продуктов для корзины
const filterProductsKeys = localStorageList.filter((product) => product != 'productData')

const productsList = () => {
  filterProductsKeys.forEach((item) => {
    const localStorageProcucts = localStorage.getItem(item);
    const basketDataProducts = JSON.parse(localStorageProcucts);
    products.push(basketDataProducts)
  })
}
productsList()

const basketStorageList = () => {
  products.forEach((elem) => {
    basketStorage[elem.name] = elem;
  })
}
basketStorageList();

// console.log(products)
//
// const localStorageBasketProducts = () => {
//     for (let i = 0; i < localStorage.length; i++) {
//       const item = localStorage.getItem(i)
//       console.log(item)
//     }
// }
// localStorageBasketProducts()
// const product = JSON.parse(chosenGoods);
//   for (let key in data) {
//     const localStorageProcucts = localStorage.getItem(key);
//     const basketDataProducts = JSON.parse(localStorageProcucts)
//     if (basketDataProducts) {
//       products.push(basketDataProducts)
//     }
//   }
//
  products && products.forEach((product, index) => {
    const newTemplateItem = TemplateItem.cloneNode(true);
    newTemplateItem.dataset.id = product.name;
    newTemplateItem.querySelector('.basket-list__item-number').textContent = index + 1;
    newTemplateItem.querySelector('.basket-list__img').src = product.image;
    newTemplateItem.querySelector('.basket-list__item-count').value = product.count;
    newTemplateItem.querySelector('.basket-list__item-price').textContent = product.price;
    newTemplateItem.querySelector('.basket-list__item-old-price').textContent = product.price + 365;
    newTemplateItem.querySelector('.basket-list__item-par').textContent = product.name;
    newTemplateItem.querySelector('.basket-list__item-code').textContent = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-minus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-plus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__price-item-total').textContent = product.price * product.count;
    newTotalItemPrice += product.count * product.price;
    totalSum.textContent = newTotalItemPrice;
    basket.appendChild(newTemplateItem);
  });




  const onMinusCount = function (evt)  {
    const newBasketButtonMinus = evt.target.closest('.basket-list__item-button-minus');
      if (newBasketButtonMinus) {
        const newBasketItem = evt.target.closest('li')
        const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
        const basketStorageId = basketStorage[newBasketItem.dataset.id];
        let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
        newBasketCount.value--;
        basketStorageId.count--;
        newTotalItemPrice -= basketStorageId.price;
        totalSum.textContent = newTotalItemPrice;
        newBasketItemPrice.innerHTML = basketStorageId.count * basketStorageId.price;
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
      }
};

  const onPlusCount = function (evt) {
    const newBasketButtonPlus = evt.target.closest('.basket-list__item-button-plus');
      if (newBasketButtonPlus) {
        const newBasketItem = evt.target.closest('li');
        const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
        const basketStorageId = basketStorage[newBasketItem.dataset.id];
        let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
        newBasketCount.value++;
        basketStorageId.count++;
        newTotalItemPrice += basketStorageId.price;
        totalSum.textContent = newTotalItemPrice;
        newBasketItemPrice.innerHTML = basketStorageId.count * basketStorageId.price;
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
    }
}


  const onlistClick = function () {
    basket.addEventListener('click', onPlusCount);
    basket.addEventListener('click', onMinusCount);
    }

  onlistClick();

  }

