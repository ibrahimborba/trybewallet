import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import {
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_EMAIL,
  INVALID_PASSWORD,
} from './helpers/constants';

describe('1 - Login page tests', () => {
  it('checks if expected elements are rendered', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('checks if only filling the form with valid data enables the button', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /entrar/i });
    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, INVALID_EMAIL);
    userEvent.type(passwordInput, INVALID_PASSWORD);
    expect(submitButton).toBeDisabled();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    expect(submitButton).toBeEnabled();
  });

  it('checks if information is saved in store and route changes to /carteira', () => {
    const { history, store } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const submitButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(submitButton);

    expect(store.getState().user.email).toBe(VALID_EMAIL);
    expect(history.location.pathname).toBe('/carteira');
  });
});
