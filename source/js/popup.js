
const popup = document.querySelector('.popup-container--success');
const popupButtonSuccess = document.querySelector('.popup__button--success');
const purchaseButton = document.querySelector('.total-container__button');

// попап пустой корзины
const emptyPopup = document.querySelector('.popup-container--empty')
// const popupButtonEmpty = document.querySelector('.popup__button--empty');


const deletePurchasedProducts = () => {
  localStorage.clear()
}

const onOpenPopup = () => {
  popup.style.display = 'block';
}


const onShowEmptyPopup = () => {
  emptyPopup.style.display = 'block';
}

const onClosePopup = () => {
  console.log('dfg')
  popup.style.display = 'none';
  deletePurchasedProducts();
  onShowEmptyPopup();
}

const isPopupTotal = () => {
  if (purchaseButton && popupButtonSuccess) {
    purchaseButton.addEventListener('click', onOpenPopup)
    popupButtonSuccess.addEventListener('click', onClosePopup)
  }
}

isPopupTotal();

export {isPopupTotal, onShowEmptyPopup};

