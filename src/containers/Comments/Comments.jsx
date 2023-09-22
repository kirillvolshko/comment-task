import React from 'react'
import './Comments.css'
import CommentsInput from '../../components/CommentsInput/CommentsInput'
import CommentsList from '../../components/CommentsList/CommentsList'


function Comments() {

  return (
    <div className='comments-container'>
      <h1>Comments #15646546</h1>
      <CommentsList/>
      <CommentsInput/>
    </div>
  )
}

export default Comments