import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('It runs all test suites', () => {
  let sum = (a, b) => a + b;
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('adds 2 numbers and prints the result', () => {
    expect(sum(2,4)).toEqual(2);
  })
})


