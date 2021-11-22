import React from 'react';
import { render, screen } from 'utils/tests';
import '@testing-library/jest-dom'

import CommentList from 'components/CommentList';

const commentOne = 'Comment One';
const commentTwo = 'Comment Two';

beforeEach(() => {
  render(<CommentList />, { preloadedState: { comments: { list: [commentOne, commentTwo] } } });
});

test('creates one li per comment', () => {
  expect(screen.getAllByRole('listitem').length).toBe(2);
});

test('renders correct comment texts', () => {
  const comments = screen.getAllByRole('listitem');
  expect(comments[0].textContent).toBe(commentOne);
  expect(comments[1].textContent).toBe(commentTwo);
});
