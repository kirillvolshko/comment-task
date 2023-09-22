import React, { useEffect, useState } from 'react'
import './CommentsList.css'
import { useDispatch, useSelector } from 'react-redux';


function CommentsList() {
  const activeItemId = useSelector(state => state.active);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('commentsArr')) || [];
    setComments(storedComments);
  }, []);

  const filteredComments = comments.filter(comment => comment.idItem === activeItemId);
  if (!activeItemId) {
    return null; 
  }
  return (
    <div className='comment-list-container'>
      {filteredComments.map((comment, index) => (
        <div key={index} className='comment-card'>
          <div
            className='comment-color-square'
            style={{ backgroundColor: comment.color }} 
          ></div>
          <div className='comment-text'>
            <p className='comment'>{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CommentsList