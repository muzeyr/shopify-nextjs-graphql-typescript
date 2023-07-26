
import {
  normalizeProduct,
  getAllProductsQuery
} from "../utils"
import { ProductConnection } from "../schema"
import { Product } from "@common/types/product"
import { ApiConfig } from "@common/types/api"

type ReturnType = {
  products: ProductConnection
}


//const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
const getAllProducts = async (config: ApiConfig,sortKey?: string, reverse?: boolean): Promise<Product[]> => {
  console.log(config);
    const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery
  })

  const products = data.products.edges.map(({ node: product }) =>
    normalizeProduct(product)
  ) ?? []

  return products
}

export default getAllProducts
