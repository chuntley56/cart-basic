import type { NextPage } from 'next'
import { products } from '../fixtures/products'
import { ProductList } from '../components/ProductList'
import { Nav } from '../components/Nav'
import React, { FunctionComponent, useState } from 'react'
import { Cart } from '../types'

const Home: NextPage = () => {
    const [cart, setCart] = useState<Cart>([])

    console.log({ cart })
    const handleClick = (isInCart: boolean, sku: string) => {

        if (!isInCart) {
            setCart(cart => [...cart, { sku, quantity: 1 }])
        } else {
            setCart(cart.filter(e => e.sku !== sku))
        }
    }
  
  return (
    <div style={{backgroundColor: '#fff'}}>
      <Nav cart={cart} />
      <ProductList cart={cart} handleClick={handleClick} products={products} />
    </div>
  )
}

export default Home
