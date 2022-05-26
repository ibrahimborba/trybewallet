import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';

describe('2 - Wallet page tests', () => {
  it('checks if header is rendered after user logs in', async () => {
    const initialStateMock = {
      user: {
        email: 'user@email.com',
      },
    };

    const { history } = renderWithRouterAndRedux(<App />, {
      initialEntries: ['/carteira'],
      initialState: initialStateMock,
    });

    expect(history.location.pathname).toBe('/carteira');

    const userEmail = screen.getByRole('heading', { name: 'user@email.com', level: 2 });
    expect(userEmail).toBeInTheDocument();
  });
});
