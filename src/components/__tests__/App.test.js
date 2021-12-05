import React from 'react';
import { render, screen } from 'utils/tests';
import '@testing-library/jest-dom'

import App from 'components/App';

beforeEach(() => {
  render(<App />);
});

test('shows a header', () => {
  expect(screen.getByTestId('header')).toBeTruthy();
});
