
import type { InferGetStaticPropsType } from "next"
import { getConfig } from "@lib/api/config"
import { Layout } from "@components/common/"
import ProductList from "@components/product/ProductList/ProductList"
import { getAllProducts } from "@lib/product"
import { useEffect, useState } from "react"
import { Product } from "@common/types/product"
import ProductFilter from "@components/product/ProductFilter/ProductFilter"
import { Container } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  //const productsWithSort = await getAllProductsWithSort(config, 'TITLE' ,false)
  const products = await getAllProducts(config, 'PRICE', false)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products: initialProducts
}: InferGetStaticPropsType<typeof getStaticProps>) {

  const [sortType, setSortType] = useState<any>({val:'PRICE',reverse:false});
  const [products, setProducts] = useState<Product[]>(initialProducts); // Use a state for products

  useEffect(() => {
    const getAllProductsWithSort = async (sortType: any) => {
      const config = getConfig();
      const sortedProducts = await getAllProducts(config, sortType.val, sortType.reverse);
      setProducts(sortedProducts); 
    };
    console.log('sortType',sortType);

    getAllProductsWithSort(sortType);
  }, [sortType]); 

  const handleSortChange = (selectedSort: 'TITLE' | 'PRICE' | 'CREATED_AT') => {
    console.log(selectedSort)
    setSortType(selectedSort);
  };


  return (
    <Container>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Products
          </h2>
          <div className="flex justify-end mb-4">
            <ProductFilter onSortChange={handleSortChange} />

          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <ProductList products={products} />
          </div>
        </div>
      </div>


    </Container>
  )
}

Home.Layout = Layout
