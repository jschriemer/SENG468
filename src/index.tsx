import React from 'react'
import ReactDOM from 'react-dom'
import Router from './utils/Router'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="account" element={<Account />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
