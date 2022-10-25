import React, { FunctionComponent } from 'react'
import { Cart } from '../../types'
//import { CartIcon } from '../../assets'
import Image from 'next/Image'

export type CartIconType = {
    cart: Cart
}

export const CartIcon: FunctionComponent<CartIconType> = ({ cart }) => {

    return (
        <Image alt="cart icon" src='../../assets.cart-icon.svg' />
    )

}