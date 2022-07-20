// const { fetchItem } = require("./helpers/fetchItem");

const sectionItems = document.querySelector('.items');
const cartList = document.querySelector('.cart__items');
const emptyCart = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const addElementToPage = async () => {
  const produto = await fetchProducts('computador');
  const results = await produto.results;
  results.forEach(({ id, title, thumbnail }) => {
    sectionItems.appendChild(createProductItemElement({ sku: id, name: title, image: thumbnail }));
  });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  cartList.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemToCart = async ({ target }) => {
 const sku = getSkuFromProductItem(target.parentNode);
 const item = await fetchItem(sku);
 const produto = createCartItemElement({ sku: item.id, name: item.title, salaPrice: item.price });

 cartList.appendChild(produto);
};

const clickSelect = () => {
  const btnSelect = document.querySelectorAll('.item__add');
  btnSelect.forEach((e) => e.addEventListener('click', addItemToCart));

  return btnSelect;
};

window.onload = async () => { 
  await addElementToPage();
  clickSelect();
  clickRemove();
};
