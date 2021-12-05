import { configureStore } from '@reduxjs/toolkit';

import commentsReducer from './reducers/comments';
import authReducer from './reducers/auth';

export default configureStore({
  reducer: {
    comments: commentsReducer,
    auth: authReducer,
  },
});
