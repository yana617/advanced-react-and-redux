import React from 'react';
import { render, screen } from 'utils/tests';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import CommentBox from 'components/CommentBox';

beforeEach(() => {
  render(<CommentBox />);
});

test('has a textarea and buttons', () => {
  expect(screen.getByRole('textbox')).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Submit comment' })).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Fetch comments' })).toBeTruthy();
});

describe('the text area', () => {
  test('has a textarea that user can type in', () => {
    const testComment = 'It is works!';
    userEvent.type(screen.getByRole('textbox'), testComment);
    expect(screen.getByRole('textbox')).toHaveValue(testComment);
  });

  test('when form is submitted, textarea get emptied', () => {
    const testComment = 'It is works!';
    userEvent.type(screen.getByRole('textbox'), testComment);
    expect(screen.getByRole('textbox')).toHaveValue(testComment);
    userEvent.click(screen.getByRole('button', { name: 'Submit comment' }));
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
