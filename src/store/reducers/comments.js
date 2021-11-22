import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getComments } from 'api/comments';

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await getComments();
  return response.data
})

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: []
  },
  reducers: {
    addComment: (state, action) => {
      state.list.push(action.payload);
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.loading = true;
    },
    [fetchComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.list = payload.map((post) => post.title);
    },
    [fetchComments.rejected]: (state) => {
      state.loading = false;
    },
  },
})

export const { addComment } = commentsSlice.actions

export default commentsSlice.reducer