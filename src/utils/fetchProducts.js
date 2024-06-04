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

export default fetchProducts;