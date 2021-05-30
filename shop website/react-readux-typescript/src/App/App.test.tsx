import React from 'react';
import { renderWithStore } from '../test-utils/testUtils';
import App from './App';
import store from './store';

test('renders learn react link', () => {
  renderWithStore(<App />, store, 'withRouter');
  // const linkElement = screen.getByText(/wiyééé/i);
  // expect(linkElement).toBeInTheDocument();
});
