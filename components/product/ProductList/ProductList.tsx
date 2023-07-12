
import { FC, useState } from 'react'
import { Container } from '@components/ui'
import { Product } from '@common/types/product'
import { ProductCard } from "@components/product"

interface Props {
  products: Product[]
}

const ProductList: FC<Props> = ({ products }) => {
  const [sortBy, setSortBy] = useState<string>(''); // varsayılan olarak boş bir sıralama seçeneği


  const renderSortingOptions = () => (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="">Sort by</option>
      <option value="alphabetical">Alphabetical</option>
      <option value="priceAsc">Price: Low to High</option>
      <option value="priceDesc">Price: High to Low</option>
    </select>
  );

  const sortProducts = (products: Product[]): Product[] => {
    if (sortBy === 'alphabetical') {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'priceAsc') {
      return products.sort((a, b) => a.price.value - b.price.value);
    } else if (sortBy === 'priceDesc') {
      return products.sort((a, b) => b.price.value - a.price.value);
    } else {
      return products;
    }
  };

  const sortedProducts = sortProducts(products);

  sortedProducts.map((product: Product) => (
    <ProductCard key={product.id} product={product} />
  ));
  
  return (
    <Container>
  <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Products
        </h2>
        <div className="flex justify-end mb-4">
            {renderSortingOptions()}
            {products.length} products
          </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            products.map((product:Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>   
    </Container>
  )
}

export default ProductList
