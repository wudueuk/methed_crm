/**
 *  Получаем необходимые элементы страницы
 * и навешиваем на них необходимые события
 */

const overlay = document.querySelector('.overlay');
if (overlay.classList.contains('active')) overlay.classList.remove('active');

const modalForm = document.querySelector('.modal__form');

const totalPrice = document.querySelector('.crm__total-price');

const goodsTableBody = document.querySelector('.table__body');

const modalTitle = document.querySelector('.modal__title');

const vendorId = document.querySelector('.vendor-code__id');

const btnAddGood = document.querySelector('.panel__add-goods');

const errorMessageBox = document.createElement('div');
errorMessageBox.style.gridArea = '.';

const errorMessage = document.createElement('span');
errorMessage.style.cssText = `
  color: red;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;

const imageContainer = document.createElement('div');
imageContainer.className = 'image__container';

errorMessageBox.append(errorMessage);
document.querySelector('.modal__fieldset')
  .append(errorMessageBox, imageContainer);

export {
  overlay,
  modalForm,
  totalPrice,
  goodsTableBody,
  modalTitle,
  btnAddGood,
  vendorId,
  errorMessage,
  imageContainer
};