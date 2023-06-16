import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// data
const notes = [
    {
        id: 1,
        content: 'Working with Lists',
        important: true
    },
    {
        id: 2,
        content: 'Usage of keys',
        important: false
    },
    {
        id: 3,
        content: 'Conditional Rendering',
        important: true
    },
    
];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={ notes } />);
