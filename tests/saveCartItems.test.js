const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  test('', () => {
    const items = '<ol><li>Item</li></ol>'
    saveCartItems(items)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', items);
  })
  // fail('Teste vazio');
});
