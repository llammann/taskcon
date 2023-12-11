import React from 'react'
import { useDispatch, useSelector } from "react-redux";
function Products() {
    const name = useSelector((state) => state.product.error);
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
  return (
   <>
   <ul>
    {
        products&& products.map((product,index)=>{
            return <li key={index}>{product.name}</li>
        })
    }
   </ul>
   </>
  )
}

export default Products