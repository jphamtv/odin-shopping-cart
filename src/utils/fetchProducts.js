// fetchProducts.js

export async function fetchProducts() {
  const API_URL = 'https://fakestoreapi.com/products?limit='
  const LIMIT = '10'

  try {
    const response = await fetch(API_URL + LIMIT);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
}
