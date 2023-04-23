import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logout from './Logout';

describe('<Logout />', () => {
  test('it should mount', () => {
    render(<Logout />);
    
    const logout = screen.getByTestId('Logout');

    expect(logout).toBeInTheDocument();
  });
});