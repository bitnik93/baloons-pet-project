
if (window.location.pathname === '/basket.html') {
  const data = {
    'baloons1' : {
        name : 'baloons1',
        url : '#',
        image : 'img/top-seller-img-1.jpg',
        price: 1000,
        code: 378394,
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

  const template = document.querySelector('#basket-item').content;
  const TemplateItem = template.querySelector('.basket-list__item');
  const basket = document.querySelector('.basket-list');



  // let chosenGoods = localStorage.getItem();
  // console.log(chosenGoods)
  // let products = JSON.parse(chosenGoods);

const products = [];



// const product = JSON.parse(chosenGoods);

  for (let key in data) {
    const localStorageProcucts = localStorage.getItem(key);
    const basketDataProducts = JSON.parse(localStorageProcucts)
    if (basketDataProducts) {
      products.push(basketDataProducts)
    }
  }


// window.addEventListener('storage', (evt) => {
//   const data = {};
//   // let newValueBasketProducts = JSON.parse(evt.newValue)
//   //   products = newValueBasketProducts;
//   data.name = products
//     console.log(data)
//     console.log('aaa')
//     // console.log(newValueBasketProducts, 'newValue')
// })


// // console.log(Array.from(products))

//   // console.log(localStorage.removeItem())
//   // localStorage.removeItem('1');

//   // localStorage.clear();
// //-------------
  products && products.forEach((product, index) => {
    const newTemplateItem = TemplateItem.cloneNode(true);
    newTemplateItem.dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__item-number').textContent = index + 1;
    newTemplateItem.querySelector('.basket-list__img').src = product.image;
    newTemplateItem.querySelector('.basket-list__item-count').value = product.count;
    newTemplateItem.querySelector('.basket-list__item-price').textContent = product.price;
    newTemplateItem.querySelector('.basket-list__item-old-price').textContent = product.price + 365;
    newTemplateItem.querySelector('.basket-list__item-par').textContent = product.name;
    newTemplateItem.querySelector('.basket-list__item-code').textContent = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-minus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__item-button-plus').dataset.id = product.code;
    newTemplateItem.querySelector('.basket-list__price-item-total').textContent = product.price;
    basket.appendChild(newTemplateItem);
  });
//--------

  // let totalItemPrice = document.querySelector('.basket-list__price-item-total')
  // let newTotalItemPrice = null;
  // let totalSum = document.querySelector('.total-container__sum');
  // let countSumNum =  Number(totalSum.textContent);

  // const onPlusCount = function (evt)  {
  //   console.log(this.children)
  //   // console.log(evt.target)
  //     const liChildren = this.children;
  //     const countPlus = liChildren[3].children[1];
  //     const countPrice = liChildren[2].children[0];
  //     const countpriceNum =  Number(countPrice.textContent);

  //     if (evt.target.closest('.basket-list__item-button-plus')) {
  //         let newTotalSum = countSumNum += countpriceNum;
  //         totalItemPrice.textContent * countPlus.textContent;
  //         totalSum.textContent = newTotalSum
  //         countPlus.textContent++;
  //     }
  // };


  const goodsAmount = {};

  // const onAmountChange = function (evt)  {
  //     console.log(evt.target)
  //     const articleId = evt.target.closest('.basket-list__item').dataset.articleId;
  //     // console.log(Number(articleId))

  //     if (evt.target.hasAttribute('data-plus')) {
  //       console.log(evt.target.hasAttribute('data-plus'))

  //         let newTotalSum = countSumNum += countpriceNum;
  //         totalItemPrice.textContent * countPlus.textContent;
  //         totalSum.textContent = newTotalSum
  //         countPlus.textContent++;
  //     } else if (evt.target.hasAttribute('data-minus')) {

  //     }
  // };




  const onMinusCount = function (evt)  {
    const newBasketButtonMinus = evt.target.closest('.basket-list__item-button-minus');
    const newBasketItem = evt.target.closest('li')
    const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
    let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
    const ITEMSTEP = newBasketItem.querySelector('.basket-list__item-price');
    console.log(newBasketCount.value)
      if (newBasketButtonMinus) {
      newBasketCount.textContent--;
      newBasketItemPrice.innerHTML = Number(newBasketItemPrice.innerHTML) - Number(ITEMSTEP.innerHTML);
      }
      if (newBasketCount.value == 0) {

        // newBasketItem.remove()
  //   products.forEach((product, id) => {
  //     // if (product.code == newBasketItem.dataset.id) {
  //     //   products.splice(id, 1)
  //     //   localStorage.setItem('data', JSON.stringify(products))
  //     // }

  // })

  }
};

  const onPlusCount = function (evt) {
      const newBasketButtonPlus = evt.target.closest('.basket-list__item-button-plus');
    const newBasketItem = evt.target.closest('li')
      if (newBasketButtonPlus) {
      const newBasketCount = newBasketItem.querySelector('.basket-list__item-count');
      let newBasketItemPrice = newBasketItem.querySelector('.basket-list__price-item-total');
      const ITEMSTEP = newBasketItem.querySelector('.basket-list__item-price');
      newBasketCount.textContent++;
      newBasketItemPrice.innerHTML = Number(newBasketItemPrice.innerHTML) + Number(ITEMSTEP.innerHTML);
  }
}

  const onlistClick = function () {
    basket.addEventListener('click', onPlusCount);
    basket.addEventListener('click', onMinusCount);
    }
  onlistClick();
  }

