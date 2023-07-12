
import type { InferGetStaticPropsType } from "next"
import { getAllProducts } from "@lib/product"
import { getConfig } from "@lib/api/config"
import { Layout } from "@components/common/"
import ProductList from "@components/product/ProductList/ProductList"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
    <ProductList products={products} />
    </>
  )
}

Home.Layout = Layout
