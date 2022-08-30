import { FunctionComponent } from 'React'
import { Product } from '../../types'
import { ProductCard } from '../ProductCard'

export type ProductListType = {
   products: Product[]
}

export const ProductList: FunctionComponent<ProductListType> = ({ products }) => {
    return (
        <div style={{display: 'flex', gap: '50px', justifyContent: 'center'}}>
            {products.map((product: any, i) => <ProductCard product={product} key={i} />)
            }
        </div>
    )
}