import React from 'react';
import { useSelector } from 'react-redux'

const ComponentList = () => {
  const comments = useSelector(state => state.comments.list)

  return (
    <div data-testid="comment-list">
      <h4>Comment List</h4>
      {comments.map((comment) => (
        <li key={comment}>{comment}</li>
      ))}
    </div>
  );
};

export default ComponentList;
