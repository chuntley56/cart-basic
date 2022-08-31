import React, { FunctionComponent, useState } from 'react'
import { Product } from '../../types'
import Image from 'next/image'

type ProductCardType = {
    product: Product
    onClick: () => void
}

export const ProductCard: FunctionComponent<ProductCardType> = ({ onClick, product }) => {
    const { name, sku, price } = product

    return (
        <div style={{backgroundColor: '#eee', textAlign: 'center'}}>
            <h3>
                {name}
            </h3>
            <Image alt={name} height={200} width={200} src={`https://dsc-assets.imgix.net/images/product-images/product-tile/${sku}.png`} />
            <p>
                ${price}
            </p>
            <button onClick={onClick}>Add to cart</button>
        </div>
    )
}