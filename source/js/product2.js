
// if (window.location.pathname === '/basket.html') {
//     const template = document.querySelector('#basket-item').content;
//     const TemplateItem = template.querySelector('.basket-list__item');
//     const basket = document.querySelector('.basket-list');

//     let chosenGoods = localStorage.getItem('data');
//     let products = JSON.parse(chosenGoods);


//   window.addEventListener('storage', (evt) => {
//     let newValueBasketProducts = JSON.parse(evt.newValue)
//       products = newValueBasketProducts;
//       console.log(products)
//       console.log(newValueBasketProducts, 'newValue')
//   })


//     // console.log(localStorage.removeItem())
//     // localStorage.removeItem('1');

//     // localStorage.clear();

//     products.forEach((product, index) => {
//       const newTemplateItem = TemplateItem.cloneNode(true);
//       newTemplateItem.dataset.id = product.code;
//       newTemplateItem.querySelector('.basket-list__item-number').textContent = index + 1;
//       newTemplateItem.querySelector('.basket-list__img').src = product.image;
//       newTemplateItem.querySelector('.basket-list__item-price').textContent = product.price;
//       newTemplateItem.querySelector('.basket-list__item-old-price').textContent = product.price + 365;
//       newTemplateItem.querySelector('.basket-list__item-par').textContent = product.name;
//       newTemplateItem.querySelector('.basket-list__item-code').textContent = product.code;
//       newTemplateItem.querySelector('.basket-list__item-button-minus').dataset.id = product.code;
//       newTemplateItem.querySelector('.basket-list__item-button-plus').dataset.id = product.code;
//       newTemplateItem.querySelector('.basket-list__price-item-total').textContent = product.price;
//       basket.appendChild(newTemplateItem);
//     });


//     // let totalItemPrice = document.querySelector('.basket-list__price-item-total')
//     // let newTotalItemPrice = null;
//     // let totalSum = document.querySelector('.total-container__sum');
//     // let countSumNum =  Number(totalSum.textContent);

//     // const onPlusCount = function (evt)  {
//     //   console.log(this.children)
//     //   // console.log(evt.target)
//     //     const liChildren = this.children;
//     //     const countPlus = liChildren[3].children[1];
//     //     const countPrice = liChildren[2].children[0];
//     //     const countpriceNum =  Number(countPrice.textContent);

//     //     if (evt.target.closest('.basket-list__item-button-plus')) {
//     //         let newTotalSum = countSumNum += countpriceNum;
//     //         totalItemPrice.textContent * countPlus.textContent;
//     //         totalSum.textContent = newTotalSum
//     //         countPlus.textContent++;
//     //     }
//     // };


//     // const goodsAmount = {};

//     // const onAmountChange = function (evt)  {
//     //     // console.log(evt.target)
//     //     const articleId = evt.target.closest('.basket-list__item').dataset.articleId;
//     //     // console.log(Number(articleId))

//     //     if (evt.target.hasAttribute('data-plus')) {
//     //       console.log(evt.target.hasAttribute('data-plus'))

//     //         // let newTotalSum = countSumNum += countpriceNum;
//     //         // totalItemPrice.textContent * countPlus.textContent;
//     //         // totalSum.textContent = newTotalSum
//     //         // countPlus.textContent++;
//     //     } else if (evt.target.hasAttribute('data-minus')) {

//     //     }
//     // };




//     const onMinusCount = function (evt)  {
//       const newBasketButtonPlus = evt.target.closest('.basket-list__item-button-minus');
//       const newBasketItem = evt.target.closest('li')
//       const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
//       let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
//       const ITEMSTEP = newBasketItem.querySelector('.basket-list__item-price');
//         if (newBasketButtonPlus) {
//         newBasketCount.textContent--;
//         newBasketItemPrice.innerHTML = Number(newBasketItemPrice.innerHTML) - Number(ITEMSTEP.innerHTML);
//         }
//         if (newBasketCount.textContent == 0) {
//       products.forEach((product, id) => {
//         if (product.code == newBasketItem.dataset.id) {
//           products.splice(id, 1)
//           localStorage.setItem('data', JSON.stringify(products))
//         }
//     })
//     newBasketItem.remove()
//     }
//   };

//     const onPlusCount = function (evt) {
//         const newBasketButtonPlus = evt.target.closest('.basket-list__item-button-plus');
//       const newBasketItem = evt.target.closest('li')
//         if (newBasketButtonPlus) {
//         const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
//         let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
//         const ITEMSTEP = newBasketItem.querySelector('.basket-list__item-price');
//         newBasketCount.textContent++;
//         newBasketItemPrice.innerHTML = Number(newBasketItemPrice.innerHTML) + Number(ITEMSTEP.innerHTML);
//     }
//   }

//     // const onlistClick = function () {
//     //   for (let buttonCont of buttonsCont) {
//     //     buttonCont.addEventListener('click', onMinusCount);
//     //     buttonCont.addEventListener('click', onPlusCount);
//     //   }
//     // }

//     const onlistClick = function () {
//       basket.addEventListener('click', onPlusCount);
//       basket.addEventListener('click', onMinusCount);
//       }
//     onlistClick();
//     }



/////////////////////////////////////////////////////
// product.js

// if (window.location.pathname === '/product.html') {
//   const data = {
//     'baloons1' : {
//         name : 'baloons1',
//         url : '#',
//         image : 'img/top-seller-img-1.jpg',
//         price: 1000,
//         code: 378394,
//         count: 0,
//         discount: false,
//         smallPhoto: [
//             'img/top-seller-img-1-small-1.jpg',
//             'img/top-seller-img-1-small-2.jpg',
//             'img/top-seller-img-1-small-3.jpg',
//             'img/top-seller-img-1-small-4.jpg',
//             'img/top-seller-img-1-small-5.jpg',
//         ]
//     },
//     'baloons2' : {
//         name : 'baloons2',
//         url : '#',
//         image : 'img/top-seller-img-2.jpg',
//         price: 1500,
//         count: 0,
//         code: 367277,
//         discount: false,
//         smallPhoto: [
//             'img/top-seller-img-2-small-1.jpg',
//             'img/top-seller-img-2-small-2.jpg',
//             'img/top-seller-img-2-small-3.jpg',
//             'img/top-seller-img-2-small-4.jpg',
//             'img/top-seller-img-2-small-5.jpg',
//         ]
//     },
//     'baloons3' : {
//         name : 'baloons3',
//         url : '#',
//         image : 'img/top-seller-img-3.jpg',
//         price: 2000,
//         discount: false,
//         count: 0,
//         code: 389009
//     },
//     'baloons4' : {
//         name : 'baloons4',
//         url : '#',
//         image : 'img/top-seller-img-4.jpg',
//         price: 2500,
//         discount: true,
//         count: 0,
//         code: 367288
//     },
//     'baloons5' : {
//         name : 'baloons5',
//         url : '#',
//         image : 'img/top-seller-img-5.jpg',
//         price: 3000,
//         count: 0,
//         code: 267683
//     },
//     'baloons6' : {
//         name : 'baloons6',
//         url : '#',
//         image : 'img/top-seller-img-1.jpg',
//         price: 3500,
//         discount: false,
//         count: 0,
//         code: 478973
//     },
//     'baloons7' : {
//         name : 'baloons7',
//         url : '#',
//         image : 'img/top-seller-img-2.jpg',
//         price: 4000,
//         count: 0,
//         code: 843997
//     },
//     'baloons8' : {
//         name : 'baloons8',
//         url : '#',
//         image : 'img/top-seller-img-3.jpg',
//         price: 4500,
//         discount: true,
//         count: 0,
//         code: 478999
//     },
//     'baloons9' : {
//         name : 'baloons9',
//         url : '#',
//         image : 'img/top-seller-img-4.jpg',
//         price: 5000,
//         discount: true,
//         count: 0,
//         code: 393373
//     },
//     'baloons10' : {
//         name : 'baloons10',
//         url : '#',
//         image : 'img/top-seller-img-5.jpg',
//         price: 5500,
//         discount: false,
//         count: 0,
//         code: 392923
//     }
// }

// // название товара
// const productName = document.querySelector('.container__article');
// // контейнер продукта
// const pageContainer = document.querySelector('.product-page');

// // большое фото
// const productBigPhoto = pageContainer.querySelector('.product-page__big-photo');

// // кнопки маленьких фото
// const productSmallPhotosList = pageContainer.querySelector('.product-page__list')
// const productSmallPhotos = pageContainer.querySelectorAll('.product-page__photo');
// const productSmallitem= pageContainer.querySelector('.product-page__item');


// //контейнер покупки продукта
// const productTitle = pageContainer.querySelector('.cost-container__title');
// const productArticle = pageContainer.querySelector('.cost-container__small');
// const productPrice = pageContainer.querySelector('.cost-container__price');
// const productOldPrice = pageContainer.querySelector('.cost-container__old-price');

// //кнопки состава
// const compoundButtonsContainer = pageContainer.querySelector('.buy-buttons-container')
// const compoundButtons = compoundButtonsContainer.querySelectorAll('.buy-buttons-container--compound')


// // кнопка 'в Корзину' и контейнер с кнопками добавления товаров
// const buyProductButton = pageContainer.querySelector('.buy-buttons-container--buy-button')
// const addProductButtonsContainer = pageContainer.querySelector('.basket-list.buy-buttons-container-count')
// const addInputProduct = pageContainer.querySelector('.basket-list__item-count');
// const productListItemCount = pageContainer.querySelector('.product-list-item__count')
// const inputContainer = pageContainer.querySelector('.buy-buttons-container-count__buttons')
// const buttonsContainer = pageContainer.querySelector('.price-container__buttons');
// // local Storage
// let chosenProduct = localStorage.getItem('productData');
// let productData = JSON.parse(chosenProduct);

// const a = () => {
//   for (let key in data) {

//     if (chosenProduct) {
//       chosenProduct = localStorage.getItem(key);
//       productData = JSON.parse(chosenProduct);
//       console.log(productData)
//     }
//     // const localStorageProcucts = localStorage.getItem(key);
//     // JSON.parse(localStorageProcucts)
//     }
//   }
//   a();

// const compoundButtonsHandler = (evt) => {
//         const compoundButton = evt.target.closest('.buy-buttons-container--compound');

//         compoundButtons.forEach((elem) => {
//             elem.classList.remove('buy-buttons-container__button--active')
//         })
//         compoundButton ? compoundButton.classList.add('buy-buttons-container__button--active') : false;
// }

// compoundButtonsContainer.addEventListener('click', compoundButtonsHandler)

// let productSmallPhotoNumber = pageContainer.querySelector('.product-page__photo-number');

// let localStorageProcucts;
// let basketDataProducts;
// let oldValueArr;

// const isProductsinBasket = (data) => {
//     localStorageProcucts = localStorage.getItem(data.name)
//   for (let key in data) {
//     localStorageProcucts = localStorage.getItem(key);
//     basketDataProducts = JSON.parse(localStorageProcucts)
//     // включить локал сторадж в продукте
//     if(basketDataProducts) {
//     // addInputProduct.value = basketDataProducts.count;
//     localStorage.setItem(basketDataProducts.name, JSON.stringify(basketDataProducts))
//     localStorageProcucts = localStorage.getItem(key);
//     basketDataProducts = JSON.parse(localStorageProcucts)
//     oldValueArr = basketDataProducts;
//     }
//   }
// }
// isProductsinBasket(data)
// console.log(oldValueArr)
// const productPage = (product) => {
//   buttonsContainer.dataset.count = product.name;
//   inputContainer.dataset.count = product.name
//     productName.textContent = product.name;
//     productBigPhoto.src = product.image;
//     productTitle.textContent = product.name;
//     productPrice.textContent = product.price;
//     productOldPrice.textContent = product.price + 365;
//     productArticle.textContent = 'Артикул ' + product.code;
//     const productKeys = productData.smallPhoto;
//       // if(oldValueArr) {

//       //   addInputProduct.value = oldValueArr.count;
//       //   buyProductButton.style.display = 'none';
//       //   addProductButtonsContainer.style.display = 'flex';
//       // }
//     productSmallPhotos.forEach((smallphoto, id) => {
//             smallphoto.src = productKeys[id];
//     })
// }

// const onAddMoreProduct = (evt) => {
//   const minusButton = evt.target.dataset.minus
//   const plusButton = evt.target.dataset.plus
//   const countDataset = evt.target.closest('div').dataset.count
//   console.log(countDataset)
//     if(plusButton) {
//       if (oldValueArr.length) {
//           addInputProduct.value++;
//           oldValueArr.count++;
//           localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//       else {
//         addInputProduct.value++;
//         oldValueArr.count++;
//         localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//     }
//     if(minusButton) {

//       if (oldValueArr.length) {
//         oldValueArr.forEach((elem)=> {
//           addInputProduct.value--;
//           elem.count--;
//           localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//         })
//       }
//       else {
//         addInputProduct.value--;
//         productData.count--;
//         localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//     }
// }



// addProductButtonsContainer.addEventListener('click', onAddMoreProduct)

// const onClickHandler = function (evt) {
//   if (oldValueArr.count === 0) {
//     oldValueArr.count = 1;
//     addInputProduct.value = oldValueArr.count;
//   }
//     // oldValueArr.count = 1;
//     addInputProduct.value = oldValueArr.count;
//     localStorage.setItem(oldValueArr.name, JSON.stringify(oldValueArr))
// }


// // кнопка покупки скрывается и появляются кнопк добавления товара
// const addProductInStorage = () => {
//   console.log(data[buttonsContainer.dataset.count])
//   localStorage.setItem(buttonsContainer.dataset.count, data[buttonsContainer.dataset.count]);
// }

// const BuyProductHandler = (evt) => {
//   onClickHandler();
//   addProductInStorage();
//   buyProductButton.style.display = 'none';
//     addProductButtonsContainer.style.display = 'flex';
// }

// buyProductButton.addEventListener('click', BuyProductHandler)

// const productPageListHandler = (evt) => {
// const smallPhoto = evt.target.closest('img');
// productSmallPhotos.forEach((elem) => {
//     elem.classList.remove('product-page__item--active')
// })
// productBigPhoto.src = smallPhoto.src
// smallPhoto.classList.add('product-page__item--active')
// }

// productSmallPhotosList.addEventListener('click', productPageListHandler)
// productPage(productData);
// }

///////////////////////////////////////////
// compositions.js

// if (window.location.pathname === '/compositions.html') {
//   const data = {
//       'baloons1' : {
//           name : 'baloons1',
//           url : '#',
//           image : 'img/top-seller-img-1.jpg',
//           price: 1000,
//           code: 378394,
//           count: 0,
//           discount: false,
//           smallPhoto: [
//               'img/top-seller-img-1-small-1.jpg',
//               'img/top-seller-img-1-small-2.jpg',
//               'img/top-seller-img-1-small-3.jpg',
//               'img/top-seller-img-1-small-4.jpg',
//               'img/top-seller-img-1-small-5.jpg',
//           ]
//       },
//       'baloons2' : {
//           name : 'baloons2',
//           url : '#',
//           image : 'img/top-seller-img-2.jpg',
//           price: 1500,
//           count: 0,
//           code: 367277,
//           discount: false,
//           smallPhoto: [
//               'img/top-seller-img-2-small-1.jpg',
//               'img/top-seller-img-2-small-2.jpg',
//               'img/top-seller-img-2-small-3.jpg',
//               'img/top-seller-img-2-small-4.jpg',
//               'img/top-seller-img-2-small-5.jpg',
//           ]
//       },
//       'baloons3' : {
//           name : 'baloons3',
//           url : '#',
//           image : 'img/top-seller-img-3.jpg',
//           price: 2000,
//           discount: false,
//           count: 0,
//           code: 389009
//       },
//       'baloons4' : {
//           name : 'baloons4',
//           url : '#',
//           image : 'img/top-seller-img-4.jpg',
//           price: 2500,
//           discount: true,
//           count: 0,
//           code: 367288
//       },
//       'baloons5' : {
//           name : 'baloons5',
//           url : '#',
//           image : 'img/top-seller-img-5.jpg',
//           price: 3000,
//           count: 0,
//           code: 267683
//       },
//       'baloons6' : {
//           name : 'baloons6',
//           url : '#',
//           image : 'img/top-seller-img-1.jpg',
//           price: 3500,
//           discount: false,
//           count: 0,
//           code: 478973
//       },
//       'baloons7' : {
//           name : 'baloons7',
//           url : '#',
//           image : 'img/top-seller-img-2.jpg',
//           price: 4000,
//           count: 0,
//           code: 843997
//       },
//       'baloons8' : {
//           name : 'baloons8',
//           url : '#',
//           image : 'img/top-seller-img-3.jpg',
//           price: 4500,
//           discount: true,
//           count: 0,
//           code: 478999
//       },
//       'baloons9' : {
//           name : 'baloons9',
//           url : '#',
//           image : 'img/top-seller-img-4.jpg',
//           price: 5000,
//           discount: true,
//           count: 0,
//           code: 393373
//       },
//       'baloons10' : {
//           name : 'baloons10',
//           url : '#',
//           image : 'img/top-seller-img-5.jpg',
//           price: 5500,
//           discount: false,
//           count: 0,
//           code: 392923
//       }
//   }

//   const compositionsList = document.querySelector('.container__compositions-list') || undefined;
//   // const compositionItems = Array.from(document.querySelectorAll('.container-list__item'));
//   const compositionsProducts = Array.from(compositionsList.children);
//   const composition = compositionsList.children;
//   const compositionItems = document.querySelectorAll('.container-list__item ');
//   const compositionInputPriceOff = document.querySelector('.container__price-input-off');
//   const compositionsPrices = document.querySelectorAll('.container-list__price');
//   const containerPriceSection = document.querySelector('.container__price-section')
//   // инпуты от и до
//   const priceWrapper = document.querySelector('.container__price-wrapper')
//   const inputFrom = document.querySelector('.container__price-input-from')
//   const inputTo = document.querySelector('.container__price-input-to')

//   // элемент скидки на товары
//   const procentItem = document.querySelector('.container-list__procent');
//   const PROCENT = Number(document.querySelector('.container-list__procent').textContent);


//   // select container

//   const selectOptions = document.querySelector('.container__price-select');



//   // отрисовка товаров
//   const compositionPricesList = () => {
//           compositionsProducts.forEach((elem) => {
//               const compositionitem = elem.dataset.article;
//               const compositionPrice = elem.querySelector('.container-list__price');
//               const compositionOldPrice = elem.querySelector('.container-list__old-price');
//               const compositionTitle = elem.querySelector('.container-list__desc');
//               compositionTitle.textContent = data[compositionitem].name
//               compositionOldPrice.textContent = data[compositionitem].price + ((PROCENT / 100) * data[compositionitem].price);
//               compositionPrice.textContent = data[compositionitem].price;
//               procentItem.textContent = PROCENT;
//               elem.style.display = 'flex';
//           });
//   }

//   compositionPricesList()

//   // ----------------------
//   // const isFilterRange = () => {
//   //   compositionsProducts.filter((product) => {
//   //     const compositionPrice = product.querySelector('.container-list__price').textContent;
//   //     product.style.display = 'none';
//   //     if ((compositionPrice >= inputFrom.value) && !inputTo.value) {
//   //       product.style.display = 'flex';
//   //     }
//   //     else if (compositionPrice <= inputTo.value && !inputFrom.value) {
//   //       product.style.display = 'flex';
//   //     }
//   //     else if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
//   //       product.style.display = 'flex';
//   //     }
//   //   })
//   // }

//   // const rangeFilter = (evt) => {
//   //   if(evt.key === 'Enter') {
//   //     isFilterRange();
//   //   }
//   // }

//   // priceWrapper.addEventListener('keydown', rangeFilter);


//   // const isProductsDiscountOn = () => {
//   //   compositionsProducts.filter((product) => {
//   //     const productPriceOff = product.querySelector('.container-list__procent');
//   //     productPriceOff ?  product.style.display = 'flex': product.style.display = 'none';
//   //   })
//   // }

//   // const onPriceOffHandler = (evt) => {
//   //     const isPriceOffCheckboxOn = evt.target.checked;
//   //   isPriceOffCheckboxOn ? isProductsDiscountOn() : compositionPricesList();
//   // }

//   // compositionInputPriceOff.addEventListener('change', onPriceOffHandler);
//   // ---------------------------

//   containerPriceSection.addEventListener('change', () => {
//     const productPriceOff = document.querySelector('.container__price-input-off');
//     compositionsProducts.filter((product) => {
//       const compositionPrice = Number(product.querySelector('.container-list__price').textContent);
//       product.style.display = 'none';
//       if ((compositionPrice >= inputFrom.value) && !inputTo.value) {
//         product.style.display = 'flex';
//         console.log('только больше')
//       }
//       else if (compositionPrice <= inputTo.value && !inputFrom.value) {
//         product.style.display = 'flex';
//         console.log('только меньше')
//       }
//       else if(!productPriceOff.checked && compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
//         product.style.display = 'flex';
//         // console.log(product.dataset.article,'без галочки')
//         console.log('без галочки')
//       }
//       else if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value && productPriceOff.checked) {
//         const productPriceOffItem = product.querySelector('.container-list__procent');
//         productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
//         console.log('с галочкой и оба интупта')
//       }
//       if(compositionPrice >= inputFrom.value && productPriceOff.checked && !inputTo.value) {
//         const productPriceOffItem = product.querySelector('.container-list__procent');
//         productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
//         console.log('с галочкой и только от')
//       }
//       if(compositionPrice <= inputTo.value && productPriceOff.checked && !inputFrom.value) {
//         const productPriceOffItem = product.querySelector('.container-list__procent');
//         productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
//         console.log('с галочкой и только от')
//       }
//     })
//   })

//   const OnSortFilterHandler = (evt) => {
//     const items = document.querySelectorAll('.container-list__item');
//     const arrItems = [...items];
//     if (evt.target.closest('.descending')) {
//       arrItems.sort((a,b) => {
//         return +b.querySelector('.container-list__price').textContent - +a.querySelector('.container-list__price').textContent;
//         // return  b.dataset.article -  a.datset.article;
//       })
//     }
//     if (evt.target.closest('.ascending')) {
//       arrItems.sort((a,b) => {
//         return +a.querySelector('.container-list__price').textContent - +b.querySelector('.container-list__price').textContent;
//         // return  b.dataset.article -  a.datset.article;
//       })
//     }
//     compositionsProducts.innerHtml = '';
//     for (let li of arrItems) {
//       compositionsList.appendChild(li)
//     }
//   }

//   selectOptions.addEventListener('click', OnSortFilterHandler)









//   // console.log(localStorage)

//   // console.log(localStorageCompositions)

//   // const isLocalStorageFull = () => {
//   //     let localStorageCompositions = JSON.parse(localStorage.data);
//   //     if (JSON.parse(localStorage.data)) {
//   //         localStorageCompositions.forEach(element => {
//   //             productsData.push(element);
//   //         });
//   //     }
//   // }

//   // isLocalStorageFull();

//   //-------------------------
//   // window.addEventListener('storage', (evt) => {
//   //         let newValueProducts = JSON.parse(evt.newValue)
//   //         productsData = newValueProducts;
//   //         if (productsData.length === 0) {
//   //             localStorage.clear();
//   //         }
//   // //     const StorageLocal = localStorage.data || [];
//   // //     productsData.length ? [] : StorageLocal;
//   // //     // productsData.length ? console.log('zero') : console.log('ddd');
//   // // console.log(productsData, 'убрал товар')
//   // })
//   //-----------------------------------------------

//   let productsData = [];
//   let productInfo;


//   window.addEventListener('storage', () => {
//     let oldProductsStorage = localStorage.getItem('baloons1')
//     let oldProducts = JSON.parse(oldProductsStorage)
//     console.log(oldProducts)
//     localStorage.setItem('baloons1', oldProducts);
//       data['baloons1'] = oldProducts;
//       console.log(oldProducts)
//       console.log(oldProducts.name)
//   })



//   const onClickHandler = function (evt) {
//       evt.preventDefault();
//       // window.location.href = 'product.html'

//       let article = evt.target.closest('li').dataset.article;
//   //
//       productInfo = data[article];
//       localStorage.setItem('productData', JSON.stringify(productInfo));
//   //
//       // productsData.push(data[article]);
//       // localStorage.setItem(article, JSON.stringify(data[article]));

//   }

//   compositionsList && compositionsList.addEventListener('click', onClickHandler);
//   }







///////////////////////

// if (window.location.pathname === '/product.html') {
//   const data = {
//     'baloons1' : {
//         name : 'baloons1',
//         url : '#',
//         image : 'img/top-seller-img-1.jpg',
//         price: 1000,
//         code: 378394,
//         count: 0,
//         discount: false,
//         smallPhoto: [
//             'img/top-seller-img-1-small-1.jpg',
//             'img/top-seller-img-1-small-2.jpg',
//             'img/top-seller-img-1-small-3.jpg',
//             'img/top-seller-img-1-small-4.jpg',
//             'img/top-seller-img-1-small-5.jpg',
//         ]
//     },
//     'baloons2' : {
//         name : 'baloons2',
//         url : '#',
//         image : 'img/top-seller-img-2.jpg',
//         price: 1500,
//         count: 0,
//         code: 367277,
//         discount: false,
//         smallPhoto: [
//             'img/top-seller-img-2-small-1.jpg',
//             'img/top-seller-img-2-small-2.jpg',
//             'img/top-seller-img-2-small-3.jpg',
//             'img/top-seller-img-2-small-4.jpg',
//             'img/top-seller-img-2-small-5.jpg',
//         ]
//     },
//     'baloons3' : {
//         name : 'baloons3',
//         url : '#',
//         image : 'img/top-seller-img-3.jpg',
//         price: 2000,
//         discount: false,
//         count: 0,
//         code: 389009
//     },
//     'baloons4' : {
//         name : 'baloons4',
//         url : '#',
//         image : 'img/top-seller-img-4.jpg',
//         price: 2500,
//         discount: true,
//         count: 0,
//         code: 367288
//     },
//     'baloons5' : {
//         name : 'baloons5',
//         url : '#',
//         image : 'img/top-seller-img-5.jpg',
//         price: 3000,
//         count: 0,
//         code: 267683
//     },
//     'baloons6' : {
//         name : 'baloons6',
//         url : '#',
//         image : 'img/top-seller-img-1.jpg',
//         price: 3500,
//         discount: false,
//         count: 0,
//         code: 478973
//     },
//     'baloons7' : {
//         name : 'baloons7',
//         url : '#',
//         image : 'img/top-seller-img-2.jpg',
//         price: 4000,
//         count: 0,
//         code: 843997
//     },
//     'baloons8' : {
//         name : 'baloons8',
//         url : '#',
//         image : 'img/top-seller-img-3.jpg',
//         price: 4500,
//         discount: true,
//         count: 0,
//         code: 478999
//     },
//     'baloons9' : {
//         name : 'baloons9',
//         url : '#',
//         image : 'img/top-seller-img-4.jpg',
//         price: 5000,
//         discount: true,
//         count: 0,
//         code: 393373
//     },
//     'baloons10' : {
//         name : 'baloons10',
//         url : '#',
//         image : 'img/top-seller-img-5.jpg',
//         price: 5500,
//         discount: false,
//         count: 0,
//         code: 392923
//     }
// }

// // название товара
// const productName = document.querySelector('.container__article');
// // контейнер продукта
// const pageContainer = document.querySelector('.product-page');

// // большое фото
// const productBigPhoto = pageContainer.querySelector('.product-page__big-photo');

// // кнопки маленьких фото
// const productSmallPhotosList = pageContainer.querySelector('.product-page__list')
// const productSmallPhotos = pageContainer.querySelectorAll('.product-page__photo');
// const productSmallitem= pageContainer.querySelector('.product-page__item');


// //контейнер покупки продукта
// const productTitle = pageContainer.querySelector('.cost-container__title');
// const productArticle = pageContainer.querySelector('.cost-container__small');
// const productPrice = pageContainer.querySelector('.cost-container__price');
// const productOldPrice = pageContainer.querySelector('.cost-container__old-price');

// //кнопки состава
// const compoundButtonsContainer = pageContainer.querySelector('.buy-buttons-container')
// const compoundButtons = compoundButtonsContainer.querySelectorAll('.buy-buttons-container--compound')


// // кнопка 'в Корзину' и контейнер с кнопками добавления товаров
// const buyProductButton = pageContainer.querySelector('.buy-buttons-container--buy-button')
// const addProductButtonsContainer = pageContainer.querySelector('.basket-list.buy-buttons-container-count')
// const addInputProduct = pageContainer.querySelector('.basket-list__item-count');
// const productListItemCount = pageContainer.querySelector('.product-list-item__count')
// const inputContainer = pageContainer.querySelector('.buy-buttons-container-count__buttons')
// const buttonsContainer = pageContainer.querySelector('.price-container__buttons');
// // local Storage
// let chosenProduct = localStorage.getItem('productData');
// let productData = JSON.parse(chosenProduct);

// // const a = () => {
// //   for (let key in data) {

// //     if (chosenProduct) {
// //       chosenProduct = localStorage.getItem(key);
// //       productData = JSON.parse(chosenProduct);
// //       console.log(productData)
// //     }
// //     // const localStorageProcucts = localStorage.getItem(key);
// //     // JSON.parse(localStorageProcucts)
// //     }
// //   }
// //   a();

// const compoundButtonsHandler = (evt) => {
//         const compoundButton = evt.target.closest('.buy-buttons-container--compound');

//         compoundButtons.forEach((elem) => {
//             elem.classList.remove('buy-buttons-container__button--active')
//         })
//         compoundButton ? compoundButton.classList.add('buy-buttons-container__button--active') : false;
// }

// compoundButtonsContainer.addEventListener('click', compoundButtonsHandler)

// let productSmallPhotoNumber = pageContainer.querySelector('.product-page__photo-number');

// let localStorageProcucts;
// let basketDataProducts;
// let oldValueArr;

// const isProductsinBasket = (data) => {
//     localStorageProcucts = localStorage.getItem(data.name)
//   for (let key in data) {
//     localStorageProcucts = localStorage.getItem(key);
//     console.log(localStorageProcucts)
//     basketDataProducts = JSON.parse(localStorageProcucts)
//     // включить локал сторадж в продукте
//     if(basketDataProducts) {
//     // addInputProduct.value = basketDataProducts.count;
//     localStorage.setItem(basketDataProducts.name, JSON.stringify(basketDataProducts))
//     localStorageProcucts = localStorage.getItem(key);
//     basketDataProducts = JSON.parse(localStorageProcucts)
//     oldValueArr = basketDataProducts;
//     }
//   }
// }
// // isProductsinBasket(data)
// // console.log(oldValueArr)
// const productPage = (product) => {
//   buttonsContainer.dataset.count = product.name;
//   inputContainer.dataset.count = product.name
//     productName.textContent = product.name;
//     productBigPhoto.src = product.image;
//     productTitle.textContent = product.name;
//     productPrice.textContent = product.price;
//     productOldPrice.textContent = product.price + 365;
//     productArticle.textContent = 'Артикул ' + product.code;
//     const productKeys = productData.smallPhoto;
//       if(oldValueArr) {

//         addInputProduct.value = oldValueArr.count;
//         buyProductButton.style.display = 'none';
//         addProductButtonsContainer.style.display = 'flex';
//       }
//     productSmallPhotos.forEach((smallphoto, id) => {
//             smallphoto.src = productKeys[id];
//     })
// }

// const onAddMoreProduct = (evt) => {
//   const minusButton = evt.target.dataset.minus
//   const plusButton = evt.target.dataset.plus
//   const countDataset = evt.target.closest('div').dataset.count
//   console.log(countDataset)
//     if(plusButton) {
//       if (oldValueArr.length) {
//           addInputProduct.value++;
//           oldValueArr.count++;
//           localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//       else {
//         addInputProduct.value++;
//         oldValueArr.count++;
//         localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//     }
//     if(minusButton) {

//       if (oldValueArr.length) {
//         oldValueArr.forEach((elem)=> {
//           addInputProduct.value--;
//           elem.count--;
//           localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//         })
//       }
//       else {
//         addInputProduct.value--;
//         productData.count--;
//         localStorage.setItem(countDataset, JSON.stringify(oldValueArr))
//       }
//     }
// }



// addProductButtonsContainer.addEventListener('click', onAddMoreProduct)

// const onClickHandler = function (evt) {
//   if (oldValueArr.count === 0) {
//     oldValueArr.count = 1;
//     addInputProduct.value = oldValueArr.count;
//     // console.log(oldValueArr.count)
//   }
//     // oldValueArr.count = 1;
//     addInputProduct.value = oldValueArr.count;
//     localStorage.setItem(oldValueArr.name, JSON.stringify(oldValueArr))
// }


// // кнопка покупки скрывается и появляются кнопк добавления товара
// const addProductInStorage = () => {
//   const addedProductArticle = data[buttonsContainer.dataset.count];
//   localStorage.setItem(buttonsContainer.dataset.count, JSON.stringify(addedProductArticle));

// }

// const BuyProductHandler = (evt) => {
//   onClickHandler();
//   addProductInStorage();
//   buyProductButton.style.display = 'none';
//     addProductButtonsContainer.style.display = 'flex';
// }

// buyProductButton.addEventListener('click', BuyProductHandler)

// const productPageListHandler = (evt) => {
// const smallPhoto = evt.target.closest('img');
// productSmallPhotos.forEach((elem) => {
//     elem.classList.remove('product-page__item--active')
// })
// productBigPhoto.src = smallPhoto.src
// smallPhoto.classList.add('product-page__item--active')
// }

// productSmallPhotosList.addEventListener('click', productPageListHandler)
// productPage(productData);
// }



