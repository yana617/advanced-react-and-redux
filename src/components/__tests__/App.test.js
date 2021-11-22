import React from 'react';
import { render, screen } from 'utils/tests';
import '@testing-library/jest-dom'

import App from 'components/App';

beforeEach(() => {
  render(<App />);
});

test('shows a comment box', () => {
  expect(screen.getByTestId('comment-box')).toBeTruthy();
});

test('shows a comment list', () => {
  expect(screen.getByTestId('comment-list')).toBeTruthy();
});
