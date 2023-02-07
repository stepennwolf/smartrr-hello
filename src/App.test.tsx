import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('renders Smartrr Hello title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Smartrr Hello/i);
    expect(titleElement).toBeInTheDocument();
  });
})
