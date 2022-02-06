/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const mobile = `@media (max-width: 500px)`

const SignupContainer = styled.div`
    max-width: 800px;
    ${mobile} {
        max-width: 500px;
    }
`

const VerticalBlackLine = styled.hr`
    width: 100%;
    color: black;
    transform: rotate(180deg);
`

export default function Account() {
    return (
        <div style={{ display: 'flex' }}>
            <Button variant="contained">Hello World</Button>
            <SignupContainer></SignupContainer>
            <VerticalBlackLine />
            <Link to="/">Home</Link>
            <Link to="/dashboard/">Dashboard</Link>
            <Link to="/account/">Account</Link>
        </div>
    )
}
