import {
  ApiFetcherOptions,
  ApiFetcherResults
} from "@common/types/api"
import { API_URL, STOREFRONT_TOKEN } from "@lib/const"

const fetchApi = async <T>({
  query,
  variables
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {
  const apiUrl = API_URL ?? "";  // Varsayılan bir değer atayarak API_URL'in undefined olma durumunu ele alıyoruz
  const storefrontToken = STOREFRONT_TOKEN ?? "";  // Varsayılan bir değer atayarak STOREFRONT_TOKEN'ın undefined olma durumunu ele alıyoruz

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontToken
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  const { data, errors } = await res.json()
  if (errors) {
    throw new Error(errors[0]?.message ?? errors.message)
  }

  return { data }
}

export default fetchApi
