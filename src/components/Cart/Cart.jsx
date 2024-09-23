import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Cart(props) {
  console.log(props);

  return (
    <div>
      <h1>Hello from Cart</h1>
      {props.children}
    </div>
  )
}
