import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// A simple test - test framework in React is called Jest
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
