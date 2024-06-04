import React from 'react';

function Article(props) {
  return (
    <>
    <div className='article-card mb-5'>
      <div className='card'>
        <div className='card-body card-custom'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{props.body}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Article
