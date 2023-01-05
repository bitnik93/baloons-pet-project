if (window.location.pathname === '/compositions.html') {
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

const compositionsList = document.querySelector('.container__compositions-list') || undefined;
// const compositionItems = Array.from(document.querySelectorAll('.container-list__item'));
const compositionsProducts = Array.from(compositionsList.children);
const composition = compositionsList.children;
const compositionItems = document.querySelectorAll('.container-list__item ');
const compositionInputPriceOff = document.querySelector('.container__price-input-off');
const compositionsPrices = document.querySelectorAll('.container-list__price');
const containerPriceSection = document.querySelector('.container__price-section')
// инпуты от и до
const priceWrapper = document.querySelector('.container__price-wrapper')
const inputFrom = document.querySelector('.container__price-input-from')
const inputTo = document.querySelector('.container__price-input-to')

// элемент скидки на товары
const procentItem = document.querySelector('.container-list__procent');
const PROCENT = Number(document.querySelector('.container-list__procent').textContent);


// select container

const selectOptions = document.querySelector('.container__price-select');



// отрисовка товаров
const compositionPricesList = () => {
        compositionsProducts.forEach((elem) => {
            const compositionitem = elem.dataset.article;
            const compositionPrice = elem.querySelector('.container-list__price');
            const compositionOldPrice = elem.querySelector('.container-list__old-price');
            const compositionTitle = elem.querySelector('.container-list__desc');
            compositionTitle.textContent = data[compositionitem].name
            compositionOldPrice.textContent = data[compositionitem].price + ((PROCENT / 100) * data[compositionitem].price);
            compositionPrice.textContent = data[compositionitem].price;
            procentItem.textContent = PROCENT;
            elem.style.display = 'flex';
        });
}

compositionPricesList()

// ----------------------
// const isFilterRange = () => {
//   compositionsProducts.filter((product) => {
//     const compositionPrice = product.querySelector('.container-list__price').textContent;
//     product.style.display = 'none';
//     if ((compositionPrice >= inputFrom.value) && !inputTo.value) {
//       product.style.display = 'flex';
//     }
//     else if (compositionPrice <= inputTo.value && !inputFrom.value) {
//       product.style.display = 'flex';
//     }
//     else if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
//       product.style.display = 'flex';
//     }
//   })
// }

// const rangeFilter = (evt) => {
//   if(evt.key === 'Enter') {
//     isFilterRange();
//   }
// }

// priceWrapper.addEventListener('keydown', rangeFilter);


// const isProductsDiscountOn = () => {
//   compositionsProducts.filter((product) => {
//     const productPriceOff = product.querySelector('.container-list__procent');
//     productPriceOff ?  product.style.display = 'flex': product.style.display = 'none';
//   })
// }

// const onPriceOffHandler = (evt) => {
//     const isPriceOffCheckboxOn = evt.target.checked;
//   isPriceOffCheckboxOn ? isProductsDiscountOn() : compositionPricesList();
// }

// compositionInputPriceOff.addEventListener('change', onPriceOffHandler);
// ---------------------------

containerPriceSection.addEventListener('change', () => {
  const productPriceOff = document.querySelector('.container__price-input-off');
  compositionsProducts.filter((product) => {
    const compositionPrice = Number(product.querySelector('.container-list__price').textContent);
    product.style.display = 'none';
    if ((compositionPrice >= inputFrom.value) && !inputTo.value) {
      product.style.display = 'flex';
      console.log('только больше')
    }
    else if (compositionPrice <= inputTo.value && !inputFrom.value) {
      product.style.display = 'flex';
      console.log('только меньше')
    }
    else if(!productPriceOff.checked && compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
      product.style.display = 'flex';
      // console.log(product.dataset.article,'без галочки')
      console.log('без галочки')
    }
    else if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value && productPriceOff.checked) {
      const productPriceOffItem = product.querySelector('.container-list__procent');
      productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
      console.log('с галочкой и оба интупта')
    }
    if(compositionPrice >= inputFrom.value && productPriceOff.checked && !inputTo.value) {
      const productPriceOffItem = product.querySelector('.container-list__procent');
      productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
      console.log('с галочкой и только от')
    }
    if(compositionPrice <= inputTo.value && productPriceOff.checked && !inputFrom.value) {
      const productPriceOffItem = product.querySelector('.container-list__procent');
      productPriceOffItem ?  product.style.display = 'flex': product.style.display = 'none';
      console.log('с галочкой и только от')
    }
  })
})

const OnSortFilterHandler = (evt) => {
  const items = document.querySelectorAll('.container-list__item');
  const arrItems = [...items];
  if (evt.target.closest('.descending')) {
    arrItems.sort((a,b) => {
      return +b.querySelector('.container-list__price').textContent - +a.querySelector('.container-list__price').textContent;
      // return  b.dataset.article -  a.datset.article;
    })
  }
  if (evt.target.closest('.ascending')) {
    arrItems.sort((a,b) => {
      return +a.querySelector('.container-list__price').textContent - +b.querySelector('.container-list__price').textContent;
      // return  b.dataset.article -  a.datset.article;
    })
  }
  compositionsProducts.innerHtml = '';
  for (let li of arrItems) {
    compositionsList.appendChild(li)
  }
}

selectOptions.addEventListener('click', OnSortFilterHandler)









// console.log(localStorage)

// console.log(localStorageCompositions)

// const isLocalStorageFull = () => {
//     let localStorageCompositions = JSON.parse(localStorage.data);
//     if (JSON.parse(localStorage.data)) {
//         localStorageCompositions.forEach(element => {
//             productsData.push(element);
//         });
//     }
// }

// isLocalStorageFull();

//-------------------------
// window.addEventListener('storage', (evt) => {
//         let newValueProducts = JSON.parse(evt.newValue)
//         productsData = newValueProducts;
//         if (productsData.length === 0) {
//             localStorage.clear();
//         }
// //     const StorageLocal = localStorage.data || [];
// //     productsData.length ? [] : StorageLocal;
// //     // productsData.length ? console.log('zero') : console.log('ddd');
// // console.log(productsData, 'убрал товар')
// })
//-----------------------------------------------

let productsData = [];
let productInfo;


window.addEventListener('storage', () => {
  let oldProductsStorage = localStorage.getItem('baloons1')
  let oldProducts = JSON.parse(oldProductsStorage)
  localStorage.setItem('baloons1', oldProducts);
    data['baloons1'] = oldProducts;

})

//kskskks

const onClickHandler = function (evt) {
    evt.preventDefault();
    window.location.href = 'product.html'

    let article = evt.target.closest('li').dataset.article;
//
    productInfo = data[article];
    localStorage.setItem('productData', JSON.stringify(productInfo));
//
    // productsData.push(data[article]);
    // localStorage.setItem(article, JSON.stringify(data[article]));

}

compositionsList && compositionsList.addEventListener('click', onClickHandler);
}



