import React from 'react';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const App = () => (
    <div>
        <Notification/>
        <AnecdoteList/>
        <AnecdoteForm/>
    </div>
)

export default App;
