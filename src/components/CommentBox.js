import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addComment, fetchComments } from 'store/reducers/comments';
import requireAuth from 'utils/requireAuth';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(comment));
    setComment('');
  };

  const loadComments = () => {
    dispatch(fetchComments());
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="comment-box">
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
      <button onClick={loadComments}>Fetch comments</button>
    </div>
  );
};

export default requireAuth(CommentBox);
