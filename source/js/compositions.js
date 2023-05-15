import data from './data.js'
import {PROCENT} from './data.js'
const compositionsList = document.querySelector('.container__compositions-list') || undefined;
const compositionsProducts = Array.from(compositionsList.children);
const composition = compositionsList.children;
const compositionItems = document.querySelectorAll('.container-list__item ');
const compositionInputPriceOff = document.querySelector('.container__price-input-off');
const compositionsPrices = document.querySelectorAll('.container-list__price');
const containerPriceSection = document.querySelector('.container__price-section')
const containerListPriceWrapper = document.querySelector('.container-list__price-wrapper');
// инпуты от и до
const priceWrapper = document.querySelector('.container__price-wrapper')
const inputFrom = document.querySelector('.container__price-input-from')
const inputTo = document.querySelector('.container__price-input-to')

// элемент скидки на товары
const procentItem = document.querySelector('.container-list__procent');
// const PROCENT = 23;


// select container

const selectOptions = document.querySelector('.container__price-select');



// отрисовка товаров
const compositionPricesList = (data) => {
        compositionsProducts.forEach((elem) => {
            const compositionitem = elem.dataset.article;
            elem.dataset.discount = data[compositionitem].discount;
            const compositionPrice = elem.querySelector('.container-list__price');
            const compositionOldPrice = elem.querySelector('.container-list__old-price');
            const compositionTitle = elem.querySelector('.container-list__desc');
            const compositionProcent = elem.querySelector('.container-list__procent');
            const procentItemSign = elem.querySelector('.container-list__procent-sign');
            const compositionPriceRuble = elem.querySelector('.container-list__price-ruble');
            const compositionLinkContainer = elem.querySelector('.container-list__link-container');
            const compositionImgWrapper = elem.querySelector('.container-list__img-wrapper')
            compositionTitle.textContent = data[compositionitem].name
            compositionOldPrice.textContent = data[compositionitem].price;
            if (data[compositionitem].discount) {
              const containerListHoverTitle = document.createElement('span');
              const compositionLinkHover = elem.querySelector('.container-list__link');
              const actionContainer = document.createElement('div');
              compositionLinkHover.appendChild(containerListHoverTitle);
              containerListHoverTitle.classList.add('container-list__hover-title');
              actionContainer.textContent = '%'
              actionContainer.classList.add('container-list__link--price-off');
              console.log(compositionImgWrapper)
              compositionImgWrapper.appendChild(actionContainer);
              procentItemSign.style.display = 'flex';
              compositionProcent.textContent = PROCENT;
              compositionPrice.textContent = data[compositionitem].price - ((PROCENT / 100) * data[compositionitem].price);
              compositionPrice.insertAdjacentHTML('afterend', '<span class="container-list__price-ruble">&nbspp</span>');
              console.log(compositionPrice.textContent)
              compositionOldPrice.insertAdjacentHTML('afterend', '<span class="container-list__price-ruble">&nbspp</span>');
            }
              else {
                procentItemSign.style.display = 'none';
                compositionProcent.style.display = 'none';
              compositionOldPrice.style.display = 'none';
              compositionPrice.textContent = data[compositionitem].price;
              compositionPrice.insertAdjacentHTML('afterend', '<span class="container-list__price-ruble">&nbspp</span>');
            }
            elem.style.display = 'flex';
        });
}

compositionPricesList(data)


containerPriceSection.addEventListener('click', () => {
  const productPriceOff = document.querySelector('.container__price-input-off');
  compositionsProducts.filter((product) => {
    const compositionPrice = Number(product.querySelector('.container-list__price').textContent);
    const compositionProcent = product.dataset.discount;
    console.log(product)
    product.style.display = 'none';
    if ((compositionPrice >= inputFrom.value) && !inputTo.value && !productPriceOff.checked) {
      product.style.display = 'flex';
      // console.log('только больше')
        console.log(product)
    }
    if (compositionPrice <= inputTo.value && !inputFrom.value && !productPriceOff.checked) {
      product.style.display = 'flex';
      // console.log('только меньше')
    }
    if(!productPriceOff.checked && compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value) {
      product.style.display = 'flex';
      console.log('без галочки')
    }
    if(compositionPrice >= inputFrom.value && compositionPrice <= inputTo.value && productPriceOff.checked && (compositionProcent == 'true')) {
      product.style.display = 'flex';
      console.log('с галочкой и оба интупта')
    }
    if(compositionPrice >= inputFrom.value && productPriceOff.checked && !inputTo.value && (compositionProcent == 'true')) {
      product.style.display = 'flex';
      console.log('с галочкой и только от')
    }
    if(compositionPrice <= inputTo.value && productPriceOff.checked && !inputFrom.value && (compositionProcent == 'true')) {
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




