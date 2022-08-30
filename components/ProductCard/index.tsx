import { FunctionComponent } from 'React'
import { Product } from '../../types'
import Image from 'next/image'

type ProductCardType = {
    product: Product
}

export const ProductCard: FunctionComponent<ProductCardType> = ({ product }) => {
    const { name, sku, price} = product
    return (
        <div style={{backgroundColor: '#eee', textAlign: 'center'}}>
            <h3>
                {name}
            </h3>
            <Image alt={name} height={200} width={200} src={`https://dsc-assets.imgix.net/images/product-images/product-tile/${sku}.png`} />
            <p>
                ${price}
            </p>
        </div>
    )
}