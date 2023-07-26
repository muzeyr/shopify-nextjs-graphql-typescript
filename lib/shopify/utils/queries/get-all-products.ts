const productConnection = `
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      vendor
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
    }
  }
`;


const getAllProductsQuery = `
  query getAllProducts($first: Int = 250, $sortBy: ProductSortKeys, $reverse: Boolean) {
    products(first: $first, sortKey: $sortBy, reverse: $reverse) {
      ${productConnection}
    }
  }
`;

export default getAllProductsQuery;
