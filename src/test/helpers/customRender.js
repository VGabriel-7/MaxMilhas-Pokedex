import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { Provider } from '../../context';

// RTL renderiza com Router e Provider
export default function customRendeR(component, initialPath = '/') {
  const history = createMemoryHistory({ initialEntries: [initialPath] });

  return {
    ...render(
      <Router history={ history }>
        <Provider>
          { component }
        </Provider>
      </Router>
    ),
    history,
  };
}