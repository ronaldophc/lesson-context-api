import React from 'react'
import Home from '../src/pages/Home';
import ThemeContextProvider from '../src/contexts/ThemeContext';

export default function index() {

    return (
        <ThemeContextProvider>
            <Home />
        </ThemeContextProvider>
    )
}
