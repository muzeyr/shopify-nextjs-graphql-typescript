import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { formatter } from '../helpers';

const mockProduct = {
    "id": "gid://shopify/Product/8399767535900",
    "name": "The 3p Fulfilled Snowboard",
    "vendor": "nu3 demo 1",
    "description": "",
    "path": "/the-3p-fulfilled-snowboard",
    "slug": "the-3p-fulfilled-snowboard",
    "handle": "the-3p-fulfilled-snowboard",
    "images": [
        {
            "url": "https://cdn.shopify.com/s/files/1/0783/4674/8188/products/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1688460410",
            "altText": "Top and bottom view of a snowboard. The top view shows 7 stacked hexagons and the bottom view shows\n          a small, centred hexagonal logo for Hydrogen.",
            "width": 1600,
            "height": 1600
        }
    ],
    "imageUrl": "https://cdn.shopify.com/s/files/1/0783/4674/8188/products/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1688460410",
    "price": {
        "value": 2629.95,
        "currencyCode": "EUR"
    },
    "options": [],
    "variants": []
}

test('Product card is rendered correctly', () => {
  // Render the ProductCard component with mock product
  render(<ProductCard product={mockProduct} />);
  
  // Check if the product name and price are rendered correctly
  const productName = screen.getByText(mockProduct.name);
  const productPrice = screen.getByText(formatter.format(mockProduct.price.value));
  
  expect(productName).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});

test('Product card image is rendered correctly', () => {
  // Render the ProductCard component with mock product
  render(<ProductCard product={mockProduct} />);
  
  // Check if the product image is rendered correctly
  const productImage = screen.getByAltText(mockProduct.name ?? "Product image");
  expect(productImage).toBeInTheDocument();
});
