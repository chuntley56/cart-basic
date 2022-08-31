import React, { FunctionComponent, useState } from 'react'
import { Product } from '../../types'
import { ProductCard } from '../ProductCard'

export type ProductListType = {
   products: Product[]
}

  

export const ProductList: FunctionComponent<ProductListType> = ({ products }) => {
    const [cart, setCart] = useState<string[]>([])
    console.log({cart})

    return (
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center'}}>
            {products.map((product: any, i) => <ProductCard product={product} key={i} onClick={() => setCart(cart => [...cart, product.sku])} />)
            }
        </div>
    )
}