import React, { useState} from 'react'
import { useDispatch } from 'react-redux';

import './ItemInput.css'


function ItemInput() {

const [item, setItem] = useState('')
const dispatch = useDispatch();

const handleInputChange = (e) => {
  setItem(e.target.value);
};

const handleOnClick = () =>{
  dispatch({ type: 'SET_ITEM', payload: item });
  setItem('')
}

  return (

    <div>
        <form className='add-form'>
            <input
             type="text"
             placeholder="Type name here..." 
             className='add-input'
             value={item}
             onChange={handleInputChange} 
             />
            <button  className='add-button' onClick={handleOnClick}>Add New</button>
        </form>
    </div>
  )
}

export default ItemInput