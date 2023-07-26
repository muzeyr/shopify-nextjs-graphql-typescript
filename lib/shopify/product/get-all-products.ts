
import {
  normalizeProduct,
  getAllProductsQuery
} from "../utils"
import { ProductConnection  } from "../schema"
import { Product } from "@common/types/product"
import { ApiConfig } from "@common/types/api"

type ReturnType = {
  products: ProductConnection
}

 
const getAllProducts = async (config: ApiConfig,sortKey?: string, reverse?: boolean): Promise<Product[]> => {
  
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
    variables: { first: 250, sortBy:sortKey, reverse } 
  })

  const products = data.products.edges.map(({ node: product }) =>
    normalizeProduct(product)
  ) ?? []

  return products
}

export default getAllProducts


