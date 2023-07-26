// ProductFilter.tsx

import React, { useState } from 'react';

type ProductFilterProps = {
  onSortChange: (sort: any) => void; // Define the prop type for onSortChange
};

const ProductFilter: React.FC<ProductFilterProps> = ({ onSortChange }) => {


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as any); 
  };


  const sortingOptions = [
    { label: 'Alphabetical A-Z', value: { val: 'TITLE', reverse: true } },
    { label: 'Alphabetical Z-A', value: { val: 'TITLE', reverse: false } },
    { label: 'Price: Low to High', value: { val: 'PRICE', reverse: true } },
    { label: 'Price: High to Low', value: { val: 'PRICE', reverse: false } },
  ];
  const renderSortingOptions = () => (
    <select
      onChange={handleSortChange}
    >
      <option id="sortingOptions" value="">Sort by</option>
      {sortingOptions.map((option, index) => (
      <option key={index} value={JSON.stringify(option.value)}>
        {option.label}
      </option>
    ))}
    </select>
  );


  return (
    <div>
      <label htmlFor="sortSelect">Sort By:</label>
      {renderSortingOptions()}
    </div>
  );
};

export default ProductFilter;
