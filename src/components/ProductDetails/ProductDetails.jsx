import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
   
let id= useParams();
console.log(id);




 useEffect(()=>{
 
},[])
  

  


  return (
    <div>
      <h1>Hello from ProductDetails</h1>
    </div>
  )
}


//param=> lazem ytktb f url
//query=> msh lazem ytktb f url w bywdiny 3l path 3ady