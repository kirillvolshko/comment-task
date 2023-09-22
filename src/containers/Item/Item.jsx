import React from 'react'

import './Item.css'
import ItemInput from '../../components/ItemInput/ItemInput'
import ItemsList from '../../components/ItemsList/ItemsList'
function Item() {
  return (
    <div className='items-container'>
        <h1>Items</h1>
        <ItemInput/>
        <ItemsList/>
    </div>
  )
}

export default Item