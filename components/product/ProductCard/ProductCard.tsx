import { Product } from "@common/types/product"
import { FC } from "react"
import Link from "next/link"
import { formatter } from "../helpers"
import Image from "next/image"


interface Props {
  product: Product
  variant?: "simple" | "slim"
}
const ProductCard: FC<Props> = ({product, variant = "simple"}) => {

  return (
    <Link
      href={`/products/${product.slug}`}
    >
      <a className="group">
        <div className="w-full overflow-hidden bg-gray-200 rounded-3xl">
          <div className="relative group-hover:opacity-75 h-72">
          { product.imageUrl && ( 
            <Image
            alt={product.name ?? "Product image"}
            src={product.imageUrl}
            height={320}
            width={320}
            quality="85"
            layout="fixed"
          /> ) }
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-700">{formatter.format(product.price.value)}</p>
      </a>
    </Link>
  )
  /*
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        { variant === "slim" ?
          <>
            <div className="inset-0 flex items-center justify-center absolute z-20">
              <span className="bg-black text-white p-3 font-bold text-xl">
                {product.name}
              </span>
            </div>
            { (product.images && product.images.length>0) && (
              <Image
                className={s.productImage}
                alt={product.name ?? "Product image"}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
            )}
          </> : (
          <>
            <div className={s.productBg}></div>
              <div className={s.productTag}>
                <h3 className={s.productTitle}>
                  <span>{product.name}</span>
                </h3>
                <span className={s.productPrice}>
                  {product.price.value} {product.price.currencyCode}
                </span>
              </div>
              { (product.images && product.images.length>0)&& (
                <Image
                  className={s.productImage}
                  alt={product.name ?? "Product image"}
                  src={product.images[0].url ?? placeholderImage}
                  height={540}
                  width={540}
                  quality="85"
                  layout="responsive"
                />
              )}
          </>
          )
        }
      </a>
    </Link>
  )
  */
}

export default ProductCard
