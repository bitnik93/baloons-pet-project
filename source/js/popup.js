
const popup = document.querySelector('.success-popup-container');
const popupButton = document.querySelector('.success-popup__button');
const purchaseButton = document.querySelector('.total-container__button');

const deletePurchasedProducts = () => {
  localStorage.clear()
}

const onClosePopup = () => {
  popup.classList.remove('visually-hidden');
}

const onOpenPopup = () => {
  popup.classList.add('visually-hidden');
  deletePurchasedProducts();
}

const isPopupTotal = () => {
  if (purchaseButton && popupButton) {
    purchaseButton.addEventListener('click', onClosePopup)
    popupButton.addEventListener('click', onOpenPopup)
  }
}

isPopupTotal();

export default isPopupTotal;

