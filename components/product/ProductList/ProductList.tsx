
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
    <>
      {
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </>
  )
}

export default ProductList
