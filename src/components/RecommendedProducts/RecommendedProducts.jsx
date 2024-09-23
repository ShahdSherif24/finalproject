import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import ProductItem from '../ProductItem/ProductItem'
//import{CounterContext} from '../../CounterContext'







export default function RecommendedProducts() {

  useEffect(() => {
    getProducts()
  }, [])

  let [products, setProducts] = useState()





  function getProducts() {
    axios.get("https://ecommerce.routemisr.com/api/v1/products")
      .then(res => {
        console.log((res.data));
        console.log(setProducts(res.data))
        

      })
      .catch(err => console.log(err)
      )



  }

  //let [count, setCount] = useState(0)
  //let { Counter } = useContext(CounterContext)
 // console.log(Counter);







   
  return (
    <>
    <div className='row'>
    
    {products?.data.map( product=><ProductItem  key={product.id}  product={products}/>)


}

    
    
    
    
</div>
    
    </>
  )
}
