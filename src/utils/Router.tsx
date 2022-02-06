import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Dashboard from '../pages/Dashboard'
import Account from '../pages/Account'
import React from 'react'

export default () => (
    <Router>
        <Route path="/">
            <LandingPage />
        </Route>
        <Route path="/dashboard/">
            <Dashboard />
        </Route>
        <Route path="/Account/">
            <Account />
        </Route>
    </Router>
)
