
import React, { useState } from 'react';

type ProductFilterProps = {
  onSortChange: (sort: any) => void; // Define the prop type for onSortChange
};

const ProductFilter: React.FC<ProductFilterProps> = ({ onSortChange }) => {


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(event.target.value as any); 
  };


  const renderSortingOptions = () => (
    <select
      onChange={handleSortChange}
    >
      <option value="">Sort by</option>
      <option value="alphabetical">Alphabetical</option>
      <option value="{val:PRICE,reverse:true}">Price: Low to High</option>
      <option value="{val:PRICE,reverse:false}">Price: High to Low</option>
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