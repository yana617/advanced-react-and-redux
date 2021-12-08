import { configureStore } from '@reduxjs/toolkit';

import commentsReducer from './reducers/comments';
import authReducer from './reducers/auth';
import async from 'middlewares/async';
import schemaValidator from 'middlewares/schemaValidator';

export default configureStore({
  reducer: {
    comments: commentsReducer,
    auth: authReducer,
  },
  middleware: [async, schemaValidator],
});
