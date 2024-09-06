import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Component', () => {
    test('renders without crashing', () => {
      render(<App />);
    });
  
    test('renders a div with the class App-header', () => {
      render(<App />);
      expect(screen.getByRole('banner')).toHaveClass('App-header'); // or use a more specific query if possible
    });
  
    test('renders a div with the class App-body', () => {
      render(<App />);
      expect(screen.getByTestId('app-body')).toHaveClass('App-body');
    });
  
    test('renders a div with the class App-footer', () => {
      render(<App />);
      expect(screen.getByRole('contentinfo')).toHaveClass('App-footer'); // or use a more specific query if possible
    });
  });
