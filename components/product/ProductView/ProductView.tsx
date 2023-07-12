
import cn from 'classnames'
import { FC, useState } from 'react'
import s from './ProductView.module.css'
import { Container } from '@components/ui'
import Image from "next/image"
import { Product } from '@common/types/product'
import { ProductSlider } from "@components/product"

interface Props {
  product: Product
}

const ProductView: FC<Props> = ({ product }) => {
  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <Container>
      <div className={cn(s.root, 'fit', "mb-5")}>
        <div className={cn(s.productDisplay, 'fit')}>
          
          <ProductSlider>
            { product.images.map(image =>
              <div key={image.url} className={s.imageContainer}>
                <Image
                  className={s.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            )}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
         
          <div>
         
            <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Product Detail</h1>
            <h2 className={s.name}>
              {product.name}
            </h2>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
          
          
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
