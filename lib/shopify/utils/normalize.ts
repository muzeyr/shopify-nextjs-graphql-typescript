
import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption
} from "../schema"

import { Product } from "@common/types/product"

const defaultImage = ({edges}: {edges: Array<ImageEdge>}) => {
  let randomImage = getRandomEdges(edges);
  return randomImage;
}

const normalizeProductImages = ({edges}: {edges: Array<ImageEdge>}) => 
  edges.map(({node: { originalSrc: url, ...rest}}) => ({
    url: process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local" ?
    `${url}` :
    url ?? "/product-image-placeholder.svg",
    ...rest }
  ))


const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
  value: +amount,
  currencyCode
})

const normalizeProductOption = ({
  id,
  values,
  name: displayName
}: ProductOption) => {

  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = {
        label: value
      }

      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value
        }
      }

      return output
    })
  }

  return normalized
}

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {

  return edges.map(({node}) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({name, value}: SelectedOption) => {
        const option = normalizeProductOption({
          id,
          name,
          values: [value]
        })

        return option
      })
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    handle,
    images: normalizeProductImages(imageConnection),
    imageUrl: defaultImage(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options ?
      options.filter(o => o.name !== "Title")
             .map(o => normalizeProductOption(o)) : [],
    variants: variants ?
      normalizeProductVariants(variants) : [],
    ...rest
  }

    
  return product
}

export function getRandomEdges(edges: Array<ImageEdge>): string {
  if (edges.length === 0) {
    return process.env.PLACE_HOLDER_IMAGE || '';
  }

  const randomIndex = Math.floor(Math.random() * edges.length);
  const randomEdge = edges[randomIndex];
  
  return randomEdge.node.originalSrc;
}