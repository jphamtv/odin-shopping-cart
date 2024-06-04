import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { http } from 'msw';
import fetchProducts from '../utils/fetchProducts';

// Setup the mock server with MSW 2.0
const server = setupServer(
  http.get('https://fakestoreapi.com/products', async ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit') || '10';
    const mockProducts = Array.from({ length: parseInt(limit) }, (_, i) => ({
      id: i + 1,
      title: `Product ${i + 1}`,
    }));
    console.log('Mocking successful response:', mockProducts);
    return new Response(JSON.stringify(mockProducts), {
      headers: { 'Content-Type': 'application/json' },
    });
  })
);

// Start the server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());

// Stop the server after all tests
afterAll(() => server.close());

describe('fetchProducts', () => {
  it('should fetch products successfully', async () => {
    const products = await fetchProducts();
    console.log('Fetched products:', products);
    expect(products).toHaveLength(10);
    expect(products[0]).toEqual({ id: 1, title: 'Product 1' });
  });

  it('should throw an error when the API request fails', async () => {
    // Override the default handler to return a 500 status
    server.use(
      http.get('https://fakestoreapi.com/products', () => {
        console.log('Mocking error response');
        return new Response(null, { status: 500 });
      })
    );

    await expect(fetchProducts()).rejects.toThrow('HTTP Error: 500');
  });
});
