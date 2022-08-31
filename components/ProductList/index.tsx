import React, { FunctionComponent, useState } from 'react'
import { Product } from '../../types'
import Image from 'next/image'

export type ProductListType = {
   products: Product[]
}

export const ProductList: FunctionComponent<ProductListType> = ({ products }) => {
    const [cart, setCart] = useState<string[]>([])
    console.log({ cart })

    return (
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center'}}>
            {products.map((product: any, i) => {
                const {name, price, sku} = product
                return (
                    <div key={i}  style={{backgroundColor: '#eee', textAlign: 'center'}}>
                        <h3>
                            {name}
                        </h3>
                        <Image alt={name} height={200} width={200} src={`https://dsc-assets.imgix.net/images/product-images/product-tile/${sku}.png`} />
                        <p>
                            ${price}
                        </p>
                        <button onClick={() => setCart(cart => [...cart, product.sku])}>Add to cart</button>
                    </div>
                )
            })
            }
        </div>
    )
}