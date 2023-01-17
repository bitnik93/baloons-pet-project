
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
  const basketPositions = document.querySelector('.total-container__position');
  const basketProducts = document.querySelector('.total-container__product');
  const sumOrder = document.querySelector('.total-container__info-sum');

  // кнопка Заказать
  const PurchasePopup = document.querySelector('.popup-container');
  const PurchaseButton = document.querySelector('.total-container__button');

  const PROCENT = 0;


  let totalItemPrice = document.querySelector('.basket-list__price-item-total')
  let newTotalItemPrice = null;
  let newTotalItemsPositions  = null;
  let newTotalItemsProducts = null;
  let inputButtonCount = null;
//общая стоимость продуктов
  let totalSum = document.querySelector('.total-container__sum');

  const localStorageList = Object.keys(localStorage);
const products = [];
const basketStorage = {};
const basketGoodsAmount = {};
// фильтрация продуктов для корзины
const filterProductsKeys = localStorageList.filter((product) => product.includes('baloons'));

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


  products && products.forEach((product, index) => {
    const newTemplateItem = TemplateItem.cloneNode(true);
    newTemplateItem.dataset.id = product.name;
    newTemplateItem.querySelector('.basket-list__item-number').textContent = index + 1;
    newTemplateItem.querySelector('.basket-list__img').src = product.image;
    newTemplateItem.querySelector('.basket-list__item-count').value = product.count;
    newTemplateItem.querySelector('.basket-list__item-procent').textContent = PROCENT + ' %';
    newTemplateItem.querySelector('.basket-list__item-price').textContent = product.price - ((PROCENT / 100) * product.price);
    newTemplateItem.querySelector('.basket-list__item-old-price').textContent = product.price;
    newTemplateItem.querySelector('.basket-list__item-par').textContent = product.name;
    newTemplateItem.querySelector('.basket-list__item-code').textContent = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-minus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-plus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__price-item-total').textContent = product.count * (product.price - ((PROCENT / 100) * product.price));
    newTotalItemPrice += product.count * (product.price - ((PROCENT / 100) * product.price));
    sumOrder.textContent = newTotalItemPrice + ' p';
    totalSum.textContent = newTotalItemPrice;
    newTotalItemsPositions += Number(product.count)
    basketProducts.textContent = products.length;
    basketPositions.textContent = newTotalItemsPositions;
    basket.appendChild(newTemplateItem);
  });


  const onInputButtonCount = (evt) => {
    if (evt.key === 'Enter') {
      const newBasketItem = evt.target.closest('li');
      const basketItemInput = evt.target.closest('.basket-list__item-count');
      const basketStorageId = basketStorage[newBasketItem.dataset.id];
      let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
      basketStorageId.count = Number(basketItemInput.value);
      newBasketItemPrice.innerHTML = basketItemInput.value * basketStorageId.price;
      newTotalItemPrice = (basketStorageId.price - ((PROCENT / 100) * basketStorageId.price)) * basketStorageId.count;
      // const sumProd = products.reduce((total, product) => total + Number(product.count));
      const basketInputs = document.querySelectorAll('.basket-list__item-count');
      console.log(products)
      const totalSumProducts = products.reduce((total, product) => total + (product.count * product.price), 0);
      totalSum.textContent = totalSumProducts;
      sumOrder.textContent =  totalSumProducts + ' p';
      localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
    }
  }


  const onMinusCount = function (evt)  {
    const newBasketButtonMinus = evt.target.closest('.basket-list__item-button-minus');
      if (newBasketButtonMinus) {
        const newBasketItem = evt.target.closest('li')
        const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
        const basketStorageId = basketStorage[newBasketItem.dataset.id];
        let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
        newBasketCount.value--;
        basketStorageId.count--;
        newTotalItemPrice -= (basketStorageId.price - ((PROCENT / 100) * basketStorageId.price));
        totalSum.textContent = newTotalItemPrice;
        sumOrder.textContent = newTotalItemPrice + ' p';
        newBasketItemPrice.innerHTML = basketStorageId.count * (basketStorageId.price - ((PROCENT / 100) * basketStorageId.price));
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
        console.log(newBasketItem)
        if (basketStorageId.count === 0) {
          localStorage.removeItem(basketStorageId.name);
          newBasketItem.remove();
        }
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
        newTotalItemPrice += (basketStorageId.price - ((PROCENT / 100) * basketStorageId.price));
        totalSum.textContent = newTotalItemPrice;
        sumOrder.textContent = newTotalItemPrice + ' p';
        newBasketItemPrice.innerHTML = basketStorageId.count * (basketStorageId.price - ((PROCENT / 100) * basketStorageId.price));
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
    }
}

const onPurchaseButtonHandler = () => {
  PurchasePopup.style.display = 'block';
  basketStorageList();
  localStorage.setItem('purchaseList', JSON.stringify(products));
}

PurchaseButton.addEventListener('click', onPurchaseButtonHandler)


  const onlistClick = function () {
    basket.addEventListener('keydown', onInputButtonCount)
    basket.addEventListener('click', onPlusCount);
    basket.addEventListener('click', onMinusCount);
    }

  onlistClick();

  }

