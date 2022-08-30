import type { NextPage } from 'next'
import { products } from '../fixtures/products'
import { ProductList } from '../components/ProductList'


const Home: NextPage = () => {
  return (
    <ProductList products={products} />
  )
}

export default Home
