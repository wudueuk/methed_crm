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

export {
  overlay,
  modalForm,
  totalPrice,
  goodsTableBody,
  modalTitle,
  btnAddGood,
  vendorId
};