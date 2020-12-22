import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
        </BrowserRouter>
    );
}

export default Routes;