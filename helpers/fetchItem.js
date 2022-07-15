const fetchItem = async (item) => {
  try {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(url);
    const result = await response.json();
    
    return result;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
