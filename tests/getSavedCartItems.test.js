const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Testa se o método localStorage.getItem é usado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  })
  test('Testa se o método localStorage.getItem é chamado com parâmetros', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
  // fail('Teste vazio');
});
