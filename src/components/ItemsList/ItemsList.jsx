import React, { useEffect, useState } from 'react'
import './ItemsList.css'
import { useSelector, useDispatch } from 'react-redux'


function ItemsList() {
  const [items, setItems] = useState([])
  const [activeItem, setActiveItem] = useState(false)
  const item = useSelector(state => state.item)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemsArr')) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    if (item.length !== 0) {
      setItems((prevItems) => {
        const newCard = {
          id: prevItems.length + 1,
          idCom: Math.floor(Math.random() * 1000000),
          title: item,
          countCom: 0,
        };
        const updatedItems = [...prevItems, newCard];
        localStorage.setItem('itemsArr', JSON.stringify(updatedItems));
        
        return updatedItems;
      });
    }
  }, [item, dispatch]);

  const deleteCard = (id) => {
    const updatedItems = (items.filter((item)=>item.id !== id))
    setItems(updatedItems)
    localStorage.setItem('itemsArr', JSON.stringify(updatedItems));
    //dispatch({ type: 'SET_ACTIVE', payload: itemId });
  }

  const ActiveItem = (itemId) => {
    setActiveItem(itemId);
    dispatch({ type: 'ACTIVE_COM', payload: itemId});
  }
  return (
    <>
      {items.map((item) => (
        <div className={`item-container${item.id === activeItem ? " item-container-active" : ""}`} key={item.id}  onClick={() => ActiveItem(item.id)}>
            <p className='title-item'>{item.title}</p>
            <span className='count-comments'>{item.countCom}</span>
            <button className='button-delete' onClick={()=>deleteCard(item.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default ItemsList
