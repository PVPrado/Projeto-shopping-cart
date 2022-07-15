require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se é uma função', () => {
    expect(typeof(fetchProducts)).toEqual('function')
  })
   test('Testa se funciona com um paramentro e se fetch foi chamada', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  })
   test('Testa se for chamada sem argumento retorna um erro', async () => {
    expect(await fetchProducts()).toEqual(new Error ('You must provide an url'));
  })
  test('Testa se utiliza a API certa', async () => {
    fetchProducts("computador")
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
   test('Testa se o retorno é o mesmo objeto esperado', async () => {
     expect( await fetchProducts('computador')).toEqual(computadorSearch);
  })

  // fail('Teste vazio');
});
