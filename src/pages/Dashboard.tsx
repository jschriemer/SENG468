/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

const mobile = `@media (max-width: 500px)`

const SignupContainer = styled.div`
    max-width: 800px;
    ${mobile} {
        max-width: 500px;
    }
`

export default function Dashboard() {
    return (
        <div>
            <ResponsiveAppBar />
            <SignupContainer></SignupContainer>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/account">Account</Link>
        </div>
    )
}
