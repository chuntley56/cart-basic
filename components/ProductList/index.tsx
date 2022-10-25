import React, { FunctionComponent, useState } from 'react'
import { Cart, Product } from '../../types'
import Image from 'next/image'

export type ProductListType = {
    cart: Cart
    handleClick: any
    products: Product[];
};

const buttonStyleActive = {
    backgroundColor: '#001233',
    border: 'none',
    color: '#efe0ca',
    padding: '10px 20px'
}

const buttonStyleInactive = {
    backgroundColor: '#8e8d8d',
    border: 'none',
    color: '#eee',
    padding: '10px 20px'
}

export const ProductList: FunctionComponent<ProductListType> = ({ cart, handleClick, products }) => {

    return (
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center', marginTop:'50px'}}>
            {products.map((product: any, i) => {
                const { name, price, sku } = product
                const isInCart = cart.findIndex(e => e.sku === sku) !== -1 ?? false
                
                return (
                    <div key={i}  style={{backgroundColor: '#eee', paddingBottom: '20px', paddingTop: '20px', textAlign: 'center'}}>
                        <Image alt={name} height={200} width={200} src={`https://dsc-assets.imgix.net/images/product-images/product-tile/${sku}.png`} />
                        <h3>
                            {name}
                        </h3>
                        <div>
                            <button onClick={() => handleClick(isInCart, sku)} style={isInCart ? buttonStyleInactive : buttonStyleActive}>
                                {isInCart ? 'Remove from cart' : `Add $${price}`}
                            </button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}