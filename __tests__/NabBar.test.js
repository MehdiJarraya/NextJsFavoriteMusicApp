import '@testing-library/jest-dom';

import React from 'react';

import App from '../src/pages/index.jsx';

import { render, screen } from '@testing-library/react';

// test('test link textDecoration while navigation', async () => {
//   render(<App />);
//   expect(screen.getByText('Shows')).toHaveClass('activeLink');
//   expect(screen.getByText('Favourites')).toHaveClass('inactiveLink');
//   fireEvent.click(screen.getByText('Favourites'));
//   await waitFor(() => screen.getByText('Favorite Genres'));
//   expect(screen.getByText('Shows')).toHaveClass('inactiveLink');
//   expect(screen.getByText('Favourites')).toHaveClass('activeLink');
// });

// simple test
describe('App', () => {
  it('renders a heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {
      name: 'Shows by Genre ( 0 )',
    });
    expect(heading).toBeInTheDocument();
  });
});
