import React from 'react';
import {
  render,
  screen,
  RenderResult,
  prettyDOM,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

describe('App', () => {
  window.alert = (): void => undefined; // provide an empty implementation for window.alert
  window.scrollTo = (): void => undefined; // provide an empty implementation for window.alert

  const renderApp = (): RenderResult => {
    const history = createMemoryHistory();

    return render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
  };
  it('should render ', () => {
    const { debug } = renderApp();
    expect(screen.getByRole('link', { name: /shw/i })).toBeInTheDocument();
    expect(screen.getByTestId('cartIcon')).toBeInTheDocument();
    expect(
      screen.getByText(/“art is like a dance of the heart,/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: /filter/i }),
    ).toBeInTheDocument();
    // expect(
    //   screen.getByRole('heading', { name: /body, mind, soul – necklace/i }),
    // ).toBeInTheDocument();
    console.log(prettyDOM(screen.getByLabelText('products List')))
  });
});
