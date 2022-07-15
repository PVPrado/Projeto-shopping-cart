require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Testa se é uma função', () => {
    expect(typeof(fetchItem)).toEqual('function')
  })
  test('Testa se fetch está sendo usada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  test('Testa se o retorno é o mesmo objeto esperado', async () => {
    expect( await fetchItem("MLB1615760527")).toEqual(item);
 })
 test('Testa se utiliza a API certa', async () => {
  fetchItem("MLB1615760527")
  expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
})
  test('Testa se for chamada sem argumento retorna um erro', async () => {
    expect(await fetchItem()).toEqual(new Error ('You must provide an url'));
  })
  // fail('Teste vazio');
});
