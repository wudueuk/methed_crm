import { goodsList } from "../script.js";
import {
  totalPrice,
  modalForm,
  overlay,
  vendorId,
  btnAddGood,
  goodsTableBody
} from "./getElements.js";
import { renderGoods } from "./render.js";

// Перерасчет итоговый суммы по таблице
const recalcTotalPrice = goods => {
  let result = goods.reduce((sum, elem) => {
    return sum + (elem.price * elem.count);
  }, 0);
  totalPrice.textContent = `$ ${result}`;
};

// Открытие формы
btnAddGood.addEventListener('click', () => {
  overlay.classList.add('active');
  // Генерируем случайный ID
  vendorId.textContent = Math.floor(Math.random() * 1e9);
});

// Отслеживание изменений в элементах формы
modalForm.addEventListener('change', e => {
  const target = e.target;

  // Отслеживаем дискаунт
  if (target === modalForm.discount) {
    if (modalForm.discount.checked === true) {
      modalForm.discount_count.removeAttribute('disabled');
    } else {
      modalForm.discount_count.setAttribute('disabled', '');
      modalForm.discount_count.value = '';
    }
  }

  // Автоматический рассчет и вывод итоговой стоимости
  if (target === modalForm.count || target === modalForm.price) {
    modalForm.total.value = '$ ' + modalForm.count.value *
      modalForm.price.value;
  }
});

// Отправка формы
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  let discount = false;
  if (modalForm.discount.checked === true) {
    discount = modalForm.discount_count.value;
  }

  const newGood = [
    {
      "id": +vendorId.textContent,
      "title": modalForm.name.value,
      "price": modalForm.price.value,
      "description": modalForm.description.value,
      "category": modalForm.category.value,
      "discont": discount,
      "count": modalForm.count.value,
      "units": modalForm.units.value,
      "images": {
        "small": '',
        "big": modalForm.image.value,
      }
    }
  ];

  goodsList.push(newGood[0]);
  renderGoods(newGood);

  modalForm.reset();
  overlay.classList.remove('active');
  recalcTotalPrice(goodsList);
});

// Закрытие формы
overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close'))
    overlay.classList.remove('active');
});

// Удаление записей из таблицы
goodsTableBody.addEventListener('click', e => {
  const target = e.target;

  if (target.closest('.table__btn_del')) {
    const parent = target.closest('tr');
    const id = goodsList.findIndex((elem, index) => {
      if (elem.id === Number(parent.dataset.id)) return true;
    });
    parent.remove();
    goodsList.splice(id, 1);
    recalcTotalPrice(goodsList);
  }

  // Отслеживаем нажатие на кнопку картинку (урок 1 модуль 3)
  if (target.closest('.table__btn_pic')) {
    const url = 'img/' + target.dataset.pic;
    const top = screen.height / 2 - 300;
    console.log('top: ', top);
    const left = screen.width / 2 - 400;
    console.log('left: ', left);
    open(url, '', `width=800,height=600,top=${top},left=${left}`);
  }
});

export default recalcTotalPrice;