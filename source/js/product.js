if (window.location.pathname === '/product.html') {
  // моковые данные
  const data = {
    'baloons1' : {
        name : 'baloons1',
        url : '#',
        image : 'img/top-seller-img-1.jpg',
        price: 1000,
        code: 378394,
        count: 0,
        discount: false,
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

// название товара
const productName = document.querySelector('.container__article');
// контейнер продукта
const pageContainer = document.querySelector('.product-page');

// большое фото
const productBigPhoto = pageContainer.querySelector('.product-page__big-photo');

// кнопки маленьких фото
const productSmallPhotosList = pageContainer.querySelector('.product-page__list')
const productSmallPhotos = pageContainer.querySelectorAll('.product-page__photo');
const productSmallitem= pageContainer.querySelector('.product-page__item');


//контейнер покупки продукта
const productTitle = pageContainer.querySelector('.cost-container__title');
const productArticle = pageContainer.querySelector('.cost-container__small');
const productPrice = pageContainer.querySelector('.cost-container__price');
const productOldPrice = pageContainer.querySelector('.cost-container__old-price');

//кнопки состава
const compoundButtonsContainer = pageContainer.querySelector('.buy-buttons-container')
const compoundButtons = compoundButtonsContainer.querySelectorAll('.buy-buttons-container--compound')


// кнопка 'в Корзину' и контейнер с кнопками добавления товаров
const buyProductButton = pageContainer.querySelector('.buy-buttons-container--buy-button')
const addProductButtonsContainer = pageContainer.querySelector('.basket-list.buy-buttons-container-count')
const addInputProduct = pageContainer.querySelector('.basket-list__item-count');
const productListItemCount = pageContainer.querySelector('.product-list-item__count')
const inputContainer = pageContainer.querySelector('.buy-buttons-container-count__buttons')
const buttonsContainer = pageContainer.querySelector('.price-container__buttons');
const minusButton = pageContainer.querySelector('.basket-list__item-button-minus');
const plusButton = pageContainer.querySelector('.basket-list__item-button-plus');

// local Storage
let chosenProduct = localStorage.getItem('productData');
let productData = JSON.parse(chosenProduct);

// функция подсвечивания активного состава шарики
const compoundButtonsHandler = (evt) => {
        const compoundButton = evt.target.closest('.buy-buttons-container--compound');

        compoundButtons.forEach((elem) => {
            elem.classList.remove('buy-buttons-container__button--active')
        })
        compoundButton ? compoundButton.classList.add('buy-buttons-container__button--active') : false;
}

compoundButtonsContainer.addEventListener('click', compoundButtonsHandler)

let productSmallPhotoNumber = pageContainer.querySelector('.product-page__photo-number');
let localStorageProcucts;
let addedProductItemCount;


// функция проверки на новый продукт в localStorage
const newProductsInBasket = () => {
    localStorageProcucts = localStorage.getItem(buttonsContainer.dataset.count)
  if (!localStorageProcucts) {
    return true;
  }
}

// отрисовка страницы продукта

const productPage = (product) => {
  buttonsContainer.dataset.count = product.name;
  inputContainer.dataset.count = product.name;
    productName.textContent = product.name;
    productBigPhoto.src = product.image;
    productTitle.textContent = product.name;
    productPrice.textContent = product.price;
    productOldPrice.textContent = product.price + 365;
    productArticle.textContent = 'Артикул ' + product.code;
    const productKeys = productData.smallPhoto;
      // if(oldValueArr) {
      //   addInputProduct.value = oldValueArr.count;
      //   buyProductButton.style.display = 'none';
      //   addProductButtonsContainer.style.display = 'flex';
      // }
    productSmallPhotos.forEach((smallphoto, id) => {
            smallphoto.src = productKeys[id];
    })
}

productPage(productData);

// функция скрытия кнопки и показа счетиков добавления товара

const onOpenCountProductHandler = () => {
  addProductInStorage();
  onAddLessProducts()
  onAddMoreProducts();
  buyProductButton.style.display = 'none';
  addProductButtonsContainer.style.display = 'flex';
}

// функция добавления/удаления продуктов по нажатия на клавиатуру

const onKeydownChangeCountProductsHandler = (evt) => {
  if (evt.key === 'Enter' && addInputProduct.value <= 0 ) {
    addInputProduct.value = 0;
    addedProductItemCount.count = addInputProduct.value;
    localStorage.removeItem(data[buttonsContainer.dataset.count].name, JSON.stringify(addedProductItemCount))
    buyProductButton.style.display = 'flex';
    addProductButtonsContainer.style.display = 'none';
  }
  if (evt.key === 'Enter' && addInputProduct.value > 0) {
    addedProductItemCount.count = addInputProduct.value;
    localStorage.setItem(data[buttonsContainer.dataset.count].name, JSON.stringify(addedProductItemCount))
  }
}

// функции увеличивания/уменьшения колличества продуктов
const onLessProductsHandler = () => {
    addedProductItemCount.count--;
          addInputProduct.value--;
    localStorage.setItem(data[buttonsContainer.dataset.count].name, JSON.stringify(addedProductItemCount))
    if (addedProductItemCount.count === 0) {
      buyProductButton.style.display = 'flex';
      addProductButtonsContainer.style.display = 'none';
      localStorage.removeItem(data[buttonsContainer.dataset.count].name)
    }
  }
  const onMoreProductsHandler = () => {
    addedProductItemCount.count++;
          addInputProduct.value++;
    localStorage.setItem(data[buttonsContainer.dataset.count].name, JSON.stringify(addedProductItemCount))
  }

// функции-обработчики уменьшения/увеличивания продуктов и удаление из localStorage

  const onAddLessProducts = () => {
    let getLocalStorageItem = localStorage.getItem(data[buttonsContainer.dataset.count].name) ;
    addedProductItemCount = JSON.parse(getLocalStorageItem);
        addInputProduct.value = addedProductItemCount.count;
        addInputProduct.addEventListener('keydown', onKeydownChangeCountProductsHandler)
        minusButton.addEventListener('click', onLessProductsHandler)
        buyProductButton.addEventListener('click', onOpenCountProductHandler)
  }

  const onAddMoreProducts = () => {
    let getLocalStorageItem = localStorage.getItem(data[buttonsContainer.dataset.count].name) ;
    addedProductItemCount = JSON.parse(getLocalStorageItem);
        addInputProduct.value = addedProductItemCount.count;
        addInputProduct.addEventListener('keydown', onKeydownChangeCountProductsHandler)
        plusButton.addEventListener('click', onMoreProductsHandler)
  }



const onAddMoreOrLessProductCount = () => {
    buyProductButton.style.display = 'none';
    addProductButtonsContainer.style.display = 'flex';
    onAddLessProducts()
    onAddMoreProducts();
}

// добавление продукта в localStorage
const addProductInStorage = () => {
  addInputProduct.value = 1;
  let addedProductArticle = data[buttonsContainer.dataset.count];
  addedProductArticle.count = addInputProduct.value;
  localStorage.setItem(buttonsContainer.dataset.count, JSON.stringify(addedProductArticle));
}

// кнопка покупки скрывается и появляются кнопка добавления товара,
const BuyProductHandler = () => {
  buyProductButton.addEventListener('click', onOpenCountProductHandler)
}

// проверка на новый продукт, если нет, то срабатывает функция добавления удаления продуктов
  newProductsInBasket() ?  BuyProductHandler() : onAddMoreOrLessProductCount();

// маленькие и большие картинки
const productPageListHandler = (evt) => {
const smallPhoto = evt.target.closest('img');
productSmallPhotos.forEach((elem) => {
    elem.classList.remove('product-page__item--active')
})
productBigPhoto.src = smallPhoto.src
smallPhoto.classList.add('product-page__item--active')
}

productSmallPhotosList.addEventListener('click', productPageListHandler)
}



