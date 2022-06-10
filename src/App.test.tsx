import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { render, screen } from '@testing-library/react';
import App from './App';

const appProvider = (ui: React.ReactElement) => (<Provider store={store}>{ui}</Provider>);

test('renders Headers elements', () => {
  render(appProvider(<App />));
  const logoElement = screen.getByText(/MovieSearcher/i);
  expect(logoElement).toBeInTheDocument();
  const linkHome = screen.getByText(/Home/i);
  expect(linkHome).toBeInTheDocument();
});
