import {isPopupTotal, onShowEmptyPopup} from './popup.js'
import {PROCENT} from './data.js'
// отрисовка товаров
  const template = document.querySelector('#basket-item').content;
  const TemplateItem = template.querySelector('.basket-list__item');
  const basketContainer = document.querySelector('.basket');
  const basket = document.querySelector('.basket-list');
  const basketPositions = document.querySelector('.total-container__position');
  const basketProducts = document.querySelector('.total-container__product');
  const sumOrder = document.querySelector('.total-container__info-sum');

  // кнопка Заказать
  const purchasePopup = document.querySelector('.popup-container--success');
  const PurchaseButton = document.querySelector('.total-container__button');

 // пустая корзина
  const emptyPopup = document.querySelector('.popup-container--empty');
// const
//корзина
const TotalContainerDesc = document.querySelector('.total-container__desc');


  let totalItemPrice = document.querySelector('.basket-list__price-item-total')
  // let newItemPrice = null;
  let newTotalItemsPositions  = null;
  let newTotalItemsProducts = null;
  let inputButtonCount = null;

//общая стоимость продуктов
  let totalSum = document.querySelector('.total-container__sum');

// функция поиска ключей LocalSorage
  const localStorageKeys = (localStorageItem) => {
    let localStorageList = Object.keys(localStorageItem).filter((key) => key.includes('baloons'));
    return localStorageList;
  }

  const filterProductsKeys = localStorageKeys(localStorage)


// фильтрация продуктов для корзины
const productsList = (productKeys) => {
  const productsData = []
  productKeys.map((item) => {
    const localStorageProcucts = localStorage.getItem(item);
    const basketDataProducts = JSON.parse(localStorageProcucts);
    productsData.push(basketDataProducts)
  })
  return productsData
}
const products = productsList(filterProductsKeys)
// Товары корзины
const basketStorageList = (products) => {
  const basketStorage = {};
  products.forEach((elem) => {
    basketStorage[elem.name] = elem;
  })
  return basketStorage
}

const basketStorage = basketStorageList(products);
isPopupTotal();

// Отрисовка списка корзины товаров
const ProductsRender = (products) => {
  let newItemPrice = null;
  products && products.forEach((product, index) => {
    const newTemplateItem = TemplateItem.cloneNode(true);
    newTemplateItem.dataset.id = product.name;
    newTemplateItem.querySelector('.basket-list__item-number').textContent = index + 1;
    newTemplateItem.querySelector('.basket-list__img').src = product.image;
    newTemplateItem.querySelector('.basket-list__item-count').value = product.count;
    newTemplateItem.querySelector('.basket-list__item-price').textContent = product.price - ((PROCENT / 100) * product.price);
    newTemplateItem.querySelector('.basket-list__item-par').textContent = product.articleName;
    newTemplateItem.querySelector('.basket-list__item-code').textContent = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-minus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-plus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__price-item-total').textContent = product.count * (product.price - ((PROCENT / 100) * product.price));
    newItemPrice += product.count * (product.price - ((PROCENT / 100) * product.price));
    if (product.discount) {
      newTemplateItem.querySelector('.basket-list__item-procent').textContent = PROCENT + ' %';
      newTemplateItem.querySelector('.basket-list__item-old-price').textContent = product.price;
    }
    sumOrder.textContent = newItemPrice;
    totalSum.textContent = newItemPrice;
    newTotalItemsPositions += Number(product.count)
    basketProducts.textContent = products.length;
    basketPositions.textContent = newTotalItemsPositions;
    basket.appendChild(newTemplateItem);
  });
}

// проверка, есть ли в корзине товары
const isProductsinBasket = (products) => {
  if (products.length) {
    return ProductsRender(products)
  }
    onShowEmptyPopup()
    basketContainer.remove()
}

isProductsinBasket(products)

// определение новой цены товара с процентом
const itemWithProcent =  (element) => {
  return (element.price - ((PROCENT / 100) * element.price));
}

// функция ввода колличества каждого товара
  const onInputButtonCount = (evt) => {
    let newItemPrice = null;
    if (evt.key === 'Enter') {
      const newBasketItem = evt.target.closest('li');
      const basketItemInput = evt.target.closest('.basket-list__item-count');
      const basketStorageId = basketStorage[newBasketItem.dataset.id];
      let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
      basketStorageId.count = Number(basketItemInput.value);
      newItemPrice = itemWithProcent(basketStorageId)
      newBasketItemPrice.innerHTML = basketItemInput.value * itemWithProcent(basketStorageId);
      const basketInputs = document.querySelectorAll('.basket-list__item-count');
      const totalSumProducts = products.reduce((total, product) => total + (product.count *  (product.price - (PROCENT / 100 * product.price))),0);
      totalSum.textContent = totalSumProducts;
      sumOrder.textContent =  totalSumProducts;
      localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
    }
  }



  // функция нахождения конкретного товара
  const findBasketStorageId = (element) => {
    return basketStorage[element]
  }

// функция уменьшения колличества товара
  const onMinusCount = function (evt)  {

    const newBasketButtonMinus = evt.target.closest('.basket-list__item-button-minus');
      if (newBasketButtonMinus) {
        let newItemPrice = null;
        const newBasketItem = evt.target.closest('li')
        const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
        const basketStorageId = findBasketStorageId(newBasketItem.dataset.id);
        let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
        newBasketCount.value--;
        basketStorageId.count--;
        newItemPrice = itemWithProcent(basketStorageId)
        totalSum.textContent = Number(totalSum.textContent) -  newItemPrice;
        sumOrder.textContent = Number(sumOrder.textContent) -  newItemPrice;
        newBasketItemPrice.innerHTML = basketStorageId.count * itemWithProcent(basketStorageId);
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
          const newFilteredCountProducts = localStorageKeys(localStorage)
          const changedProducts = productsList(newFilteredCountProducts)
          const changedTotalItemsProducts = changedProducts.reduce((total, current) => (total + current.count),0)
        basketPositions.textContent = changedTotalItemsProducts;
        basketProducts.textContent = changedProducts.length;
        if (basketStorageId.count === 0) {
          localStorage.removeItem(basketStorageId.name);
          newBasketItem.remove();
          basketProducts.textContent = localStorageKeys(localStorage).length
        }
      }
};

// функция увеличение колличества товара
  const onPlusCount = function (evt) {
    const newBasketButtonPlus = evt.target.closest('.basket-list__item-button-plus');
      if (newBasketButtonPlus) {
        let newItemPrice = null;
        const newBasketItem = evt.target.closest('li');
        const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
        const basketStorageId = findBasketStorageId(newBasketItem.dataset.id);
        let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
        newBasketCount.value++;
        basketStorageId.count++;
        newItemPrice = itemWithProcent(basketStorageId)
        totalSum.textContent = Number(totalSum.textContent) + newItemPrice;
        sumOrder.textContent = Number(sumOrder.textContent) + newItemPrice;
        newBasketItemPrice.innerHTML = basketStorageId.count * itemWithProcent(basketStorageId);
        basketStorageId.totalItemPrice = newBasketItemPrice.innerHTML;
        localStorage.setItem(newBasketItem.dataset.id, JSON.stringify(basketStorageId))
        const newFilteredCountProducts = localStorageKeys(localStorage)
        const changedProducts = productsList(newFilteredCountProducts)
        const changedTotalItemsProducts = changedProducts.reduce((total, current) => (total + current.count),0)
        basketPositions.textContent = changedTotalItemsProducts;
        basketProducts.textContent = changedProducts.length;
    }
}
// функция удаления товара
const onDeleteProduct = (evt) => {
  const newBasketButtonCancel = evt.target.closest('.basket-list__price-cancel');
  const newBasketItem = evt.target.closest('li');
  const basketStorageId = basketStorage[newBasketItem.dataset.id];
  let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');

  if(newBasketButtonCancel) {
        newBasketItem.remove();
        totalSum.textContent = Number(sumOrder.textContent) - Number(newBasketItemPrice.textContent)
      sumOrder.textContent= Number(sumOrder.textContent) - Number(newBasketItemPrice.textContent)
    localStorage.removeItem(basketStorageId.name);/// добавить name
    newBasketItem.remove();
    const newFilteredCountProducts = localStorageKeys(localStorage)
    const changedProducts = productsList(newFilteredCountProducts)
    // // console.log(sumOrder.textContent, 'до')
    const changedTotalItemsProducts = changedProducts.reduce((total, current) => (total + current.count),0)
    basketPositions.textContent = changedTotalItemsProducts;
    basketProducts.textContent = localStorageKeys(localStorage).length
  }
}


const onPurchaseButtonHandler = () => {
  // purchasePopup.style.display = 'block';
  basketContainer.remove()
  localStorage.setItem('purchaseList', JSON.stringify(basketStorageList(products)));
}

PurchaseButton.addEventListener('click', onPurchaseButtonHandler)



// функция обрабатывающая клики добавления/удаления товаров
  const onlistClick = function () {
    basket.addEventListener('keydown', onInputButtonCount)
    basket.addEventListener('click', onPlusCount);
    basket.addEventListener('click', onMinusCount);
    basket.addEventListener('click', onDeleteProduct)
    }

  onlistClick();
