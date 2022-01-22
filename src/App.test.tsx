import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogsElements, messagesElements, postsElements} from '.';



test('renders learn react link', () => {
  render(<App messages={messagesElements} dialogs={dialogsElements} posts={postsElements}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
