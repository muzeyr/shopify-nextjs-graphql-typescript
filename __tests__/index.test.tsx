import { render, screen } from '@testing-library/react'
import About from '../pages/about'
import '@testing-library/jest-dom'
import { Product } from '@common/types/product'

describe('About Page', () => {
  it('renders a heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', {
      name: /About Page/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Product Interface', () => {
  let product: Product;

  beforeEach(() => {
    product = {
      id: '1',
      name: 'Example Product',
      description: 'This is an example product.',
      slug: 'example-product',
      handle: 'example-handle',
      path: '/products/example-product',
      images: [],
      price: {
        value: 10.99,
        currencyCode: 'USD',
      },
      imageUrl: 'https://example.com/product-image.jpg',
    };
  });

  it('should have the correct properties', () => {
    expect(product.id).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.description).toBeDefined();
    expect(product.slug).toBeDefined();
    expect(product.handle).toBeDefined();
    expect(product.path).toBeDefined();
    expect(product.images).toBeDefined();
    expect(product.price).toBeDefined();
    expect(product.imageUrl).toBeDefined();
  });

  it('should have the correct types for properties', () => {
    expect(typeof product.id).toBe('string');
    expect(typeof product.name).toBe('string');
    expect(typeof product.description).toBe('string');
    expect(typeof product.slug).toBe('string');
    expect(typeof product.handle).toBe('string');
    expect(typeof product.path).toBe('string');
    expect(Array.isArray(product.images)).toBe(true);
    expect(typeof product.price).toBe('object');
    expect(typeof product.imageUrl).toBe('string');
  });

  it('should have a valid price object', () => {
    expect(product.price.value).toBeDefined();
    expect(typeof product.price.value).toBe('number');
    expect(product.price.currencyCode).toBeDefined();
    expect(typeof product.price.currencyCode).toBe('string');
  });
});
