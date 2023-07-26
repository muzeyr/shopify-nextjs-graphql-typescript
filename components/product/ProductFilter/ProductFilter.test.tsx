import { render, screen, fireEvent } from '@testing-library/react';
import ProductFilter from './ProductFilter';

test('Sorting options are rendered correctly', () => {
  // Render the ProductFilter component
  render(<ProductFilter onSortChange={() => {}} />);
  
  // Check if the sorting options are rendered with the correct labels
  const sortingOptions = [
    { label: 'Alphabetical A-Z', value: { val: 'TITLE', reverse: true } },
    { label: 'Alphabetical Z-A', value: { val: 'TITLE', reverse: false } },
    { label: 'Price: Low to High', value: { val: 'PRICE', reverse: true } },
    { label: 'Price: High to Low', value: { val: 'PRICE', reverse: false } },
  ];
  
  sortingOptions.forEach((option) => {
    const renderedOption = screen.getByText(option.label);
    expect(renderedOption).toBeInTheDocument();
  });
});
