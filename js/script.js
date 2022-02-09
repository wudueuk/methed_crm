'use strict';

const goodsList = [
  {
    "id": 253842678,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 296378448,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 215796548,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 246258248,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const overlay = document.querySelector('.overlay');
if (overlay.classList.contains('active'))
  overlay.classList.remove('active');

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close'))
    overlay.classList.remove('active');
});

const btnAddGood = document.querySelector('.panel__add-goods');
btnAddGood.addEventListener('click', () => {
  overlay.classList.add('active')
});

const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheckbox = document.querySelector('.modal__checkbox');
const modalDiscount = document.querySelector('.modal__input_discount');

/**
 * Работа с таблицей товаров
 */

const goodsTableBody = document.querySelector('.table__body');

const createRow = good => {
  return `
  <tr data-id="${good.id}">
    <td class="table__cell ">${good.id}</td>
    <td class="table__cell table__cell_left table__cell_name">${good.title}</td>
    <td class="table__cell table__cell_left">${good.category}</td>
    <td class="table__cell">${good.units}</td>
    <td class="table__cell">${good.count}</td>
    <td class="table__cell">$${good.price}</td>
    <td class="table__cell">$${good.count * good.price}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  </tr>
  `;
};

const renderGoods = goods => {
  goods.forEach(element => {
    goodsTableBody.insertAdjacentHTML('beforeend', createRow(element));
  });
};

renderGoods(goodsList);

/**
 * Работа с данными таблицы
 */

// Урок 6
goodsTableBody.addEventListener('click', e => {
  const target = e.target;

  if (target.closest('.table__btn_del')) {
    const parent = target.closest('tr');
    const id = goodsList.findIndex((elem, index) => {
      if (elem.id === Number(parent.dataset.id)) return true;
    });
    parent.remove();
    goodsList.splice(id, 1);
    console.log('goodsList: ', goodsList);
  }
});

