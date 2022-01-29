import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addPost, textAreaUpdate} from "./redux/state";



test('renders learn react link', () => {
  render(<App state={state} addPost={addPost} textAreaUpdate={textAreaUpdate}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
