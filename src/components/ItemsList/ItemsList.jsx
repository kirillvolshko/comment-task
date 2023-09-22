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
    if (storedItems.length > 0) {
      setActiveItem(storedItems[0].id);
      dispatch({ type: 'ACTIVE_COM', payload: storedItems[0].id});
    }
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
  }, [item]);

  const deleteCard = (id) => {
    const updatedItems = (items.filter((item)=>item.id !== id))
    setItems(updatedItems)
    localStorage.setItem('itemsArr', JSON.stringify(updatedItems));

    const storedComments = JSON.parse(localStorage.getItem('commentsArr')) || [];
    const updatedComments = storedComments.filter((comment) => comment.idItem !== id);
    localStorage.setItem('commentsArr', JSON.stringify(updatedComments));
    
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
