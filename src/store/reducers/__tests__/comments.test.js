import reducer, { addComment } from 'store/reducers/comments';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    list: [],
  });
})

test('should handle a addComment action being added to an empty list', () => {
  const previousState = { list: [] };
  const newComment = 'Hi';
  expect(reducer(previousState, addComment(newComment))).toEqual({
    list: [newComment],
  })
})
