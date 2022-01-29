import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import state, {addMessage, addPost, newMessageTextAreaUpdate, newPostTextAreaUpdate} from "./redux/state";


test('renders learn react link', () => {
    render(<App state={state} addPost={addPost} addMessage={addMessage} newPostTextAreaUpdate={newPostTextAreaUpdate}
                newMessageTextAreaUpdate={newMessageTextAreaUpdate}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
