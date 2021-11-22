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
  nock('http://jsonplaceholder.typicode.com').get('/posts').reply(200, [{ title: 'One' }]);
  userEvent.click(screen.getByRole('button', { name: 'Fetch comments' }));
  await waitFor(() => expect(screen.getAllByRole('listitem').length).toBe(100));
});