import React from 'react';
import { render, screen, waitFor } from 'utils/tests';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import nock from 'nock';

import App from 'components/App';

beforeEach(() => {
  render(<App />);
});

test('fetch comments and display them', async () => {
  userEvent.click(screen.getByRole('button', { name: 'Sign in' }));
  userEvent.click(screen.getByRole('link', { name: 'Post a comment' }));
  nock('http://jsonplaceholder.typicode.com').get('/posts').reply(200, [{ title: 'One' }]);
  userEvent.click(screen.getByRole('button', { name: 'Fetch comments' }));
  userEvent.click(screen.getByRole('link', { name: 'Home' }));
  await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(103));
});