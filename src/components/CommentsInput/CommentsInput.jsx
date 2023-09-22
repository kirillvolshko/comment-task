import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './CommentsInput.css'

function CommentsInput() {

  const [comments, setComments] = useState([])
  const [text, setText] = useState(''); 
  const [color, setColor] = useState('#000000');
  const activeItem = useSelector(state => state.active)

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('commentsArr')) || [];
    setComments(storedItems);
  }, []);
  
  const createCom = () => { 
    const createComment = {
      id: comments.length + 1,
      text: text,
      color: color, 
      idItem: activeItem,
    };
    
    const updatedComments = [...comments, createComment];
    localStorage.setItem('commentsArr', JSON.stringify(updatedComments));
    setComments(updatedComments);

  };

  return (
    <div className='commment-container'>
        <form className='comment-form'>
            <input
             type="color"
             className='input-color-commment'
             value={color} 
             onChange={handleColorChange} 
             />
            <textarea
             className='textarea-comment'
             value={text} 
             onChange={handleTextChange}
             />
            <button className='button-add-comment' onClick={createCom}>Add New</button>
        </form>
    </div>
  )
}

export default CommentsInput