const fetchProducts = async () => {
  // const API_URL = 'https://fakestoreapi.com/products/category/electronics'
  const API_URL = 'https://fakestoreapi.com/products'

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

// Temporary testing code - OK TO DELETE
fetchProducts()
  .then(products => {
    console.log('Fetched products:', products);
  })
  .catch(error => {
    console.error('Error:', error);
  });

export default fetchProducts;