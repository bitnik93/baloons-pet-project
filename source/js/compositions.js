if (window.location.pathname === '/compositions.html') {
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

const compositionsList = document.querySelector('.container__compositions-list') || undefined;
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
const PROCENT = 23;


// select container

const selectOptions = document.querySelector('.container__price-select');



// отрисовка товаров
const compositionPricesList = () => {
        compositionsProducts.forEach((elem) => {
            const compositionitem = elem.dataset.article;
            elem.dataset.discount = data[compositionitem].discount;
            const compositionPrice = elem.querySelector('.container-list__price');
            const compositionOldPrice = elem.querySelector('.container-list__old-price');
            const compositionTitle = elem.querySelector('.container-list__desc');
            const compositionProcent = elem.querySelector('.container-list__procent');
            const procentItemSign = elem.querySelector('.container-list__procent-sign');
            compositionTitle.textContent = data[compositionitem].name
            compositionOldPrice.textContent = data[compositionitem].price;
            if (data[compositionitem].discount) {
              procentItemSign.style.display = 'flex';
              compositionProcent.textContent = PROCENT;
              compositionPrice.textContent = data[compositionitem].price - ((PROCENT / 100) * data[compositionitem].price);
            }
              else {
                procentItemSign.style.display = 'none';
                compositionProcent.style.display = 'none';
              compositionOldPrice.style.display = 'none';
              compositionPrice.textContent = data[compositionitem].price;
            }
            elem.style.display = 'flex';
        });
}

compositionPricesList()


containerPriceSection.addEventListener('change', () => {
  const productPriceOff = document.querySelector('.container__price-input-off');
  compositionsProducts.filter((product) => {
    const productPriceOffItem = product.querySelector('.container-list__procent');
    const compositionPrice = Number(product.querySelector('.container-list__price').textContent);
    const compositionProcent = product.dataset.discount;
    console.log(compositionPrice)
    product.style.display = 'none';
    if ((compositionPrice >= inputFrom.value) && !inputTo.value && !productPriceOff.checked) {
      product.style.display = 'flex';
      console.log('только больше')
    }
    else if (compositionPrice <= inputTo.value && !inputFrom.value && !productPriceOff.checked) {
      product.style.display = 'flex';
      console.log('только меньше')
    }
    else if(!productPriceOff.checked && compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
      product.style.display = 'flex';
      console.log('без галочки')
    }
    else if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value && productPriceOff.checked && (compositionProcent == 'true')) {
      product.style.display = 'flex';
      console.log('с галочкой и оба интупта')
    }
    else if(compositionPrice >= inputFrom.value && productPriceOff.checked && !inputTo.value && (compositionProcent == 'true')) {
      product.style.display = 'flex';
      console.log('с галочкой и только от')
    }
    else if(compositionPrice <= inputTo.value && productPriceOff.checked && !inputFrom.value && (compositionProcent == 'true')) {
      product.style.display = 'flex';
      console.log('с галочкой и только до')
    }
  })
})

const OnSortFilterHandler = (evt) => {
  const items = document.querySelectorAll('.container-list__item');
  const arrItems = [...items];
  if (evt.target.closest('.descending')) {
    arrItems.sort((a,b) => {
      return +b.querySelector('.container-list__price').textContent - +a.querySelector('.container-list__price').textContent;

    })
  }
  if (evt.target.closest('.ascending')) {
    arrItems.sort((a,b) => {
      return +a.querySelector('.container-list__price').textContent - +b.querySelector('.container-list__price').textContent;
    })
  }
  compositionsProducts.innerHtml = '';
  for (let li of arrItems) {
    compositionsList.appendChild(li)
  }
}

selectOptions.addEventListener('click', OnSortFilterHandler)

let productsData = [];
let productInfo;

const onClickHandler = function (evt) {
    evt.preventDefault();
    window.location.href = 'product.html'

    let article = evt.target.closest('li').dataset.article;

    productInfo = data[article];
    localStorage.setItem('productData', JSON.stringify(productInfo));
//
    // productsData.push(data[article]);
    // localStorage.setItem(article, JSON.stringify(data[article]));

}

compositionsList && compositionsList.addEventListener('click', onClickHandler);
}



