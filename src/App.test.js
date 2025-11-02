import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

// Mock axios used by the app's services to avoid real HTTP calls during tests
vi.mock('axios', () => {
  return {
    create: () => ({
      get: async () => ({ data: [] }),
      post: async () => ({ data: {} }),
      put: async () => ({ data: {} }),
      delete: async () => ({ data: {} }),
    })
  };
});

import App from './App';

// Basic smoke test adapted to this project: the Header contains the site title 'CAMA'
test('renders site title in header', () => {
  // avoid using JSX here so Rollup doesn't choke if JSX transform isn't applied
  render(React.createElement(App));
  const titleElement = screen.getByText(/CAMA/i);
  expect(titleElement).toBeInTheDocument();
});
