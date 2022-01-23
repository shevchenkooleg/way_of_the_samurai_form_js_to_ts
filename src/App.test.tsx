import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogs, messages, posts} from '.';



test('renders learn react link', () => {
  render(<App messages={messages} dialogs={dialogs} posts={posts}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
