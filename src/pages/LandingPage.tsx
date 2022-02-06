/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import React, { ComponentProps } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Apple from '../images/aapl.png'
import Microsoft from '../images/msft.png'
import Amazon from '../images/amzn.png'

const mobile = `@media (max-width: 500px)`

const Trend: React.FC = ({}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
    </svg>
)

const Credit: React.FC = ({}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        fill="#000000"
    >
        <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
            <path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h5v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M14.93,19.17l-2.83-2.83l-1.41,1.41L14.93,22L22,14.93l-1.41-1.41L14.93,19.17z" />
        </g>
    </svg>
)

const Leaderboard: React.FC = ({}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        fill="#000000"
    >
        <rect fill="none" height="24" width="24" />
        <g>
            <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
        </g>
    </svg>
)

const SignupContainer = styled.div`
    max-width: 800px;
    margin: auto;
    width: 50%;
    padding: 10px;
    ${mobile} {
        max-width: 500px;
    }
`

const StockImageContainer = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;
`

const IconContainer = styled.div`
    max-width: 800px;
    padding: 200px;
    display: flex;
    ${mobile} {
        max-width: 500px;
    }
`

const VerticalBlackLine = styled.hr`
    color: black;
    transform: rotate(180deg);
`

const TrendingUp = styled(Trend)`
    width: 300px;
    height: 320px;
    &:hover {
        fill: blue;
    }
`

const CreditScore = styled(Credit)`
    width: 300px;
    height: 320px;
    &:hover {
        fill: blue;
    }
`

const Leader = styled(Leaderboard)`
    width: 300px;
    height: 320px;
    &:hover {
        fill: blue;
    }
`

const Stock = styled.img`
    width: 500px;
    height: 220px;
`

function LandingPage() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ float: 'left', width: '50%' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>DAYTRADER.COM</h1>
                    <h3>Buy, Sell, Trade!</h3>
                </div>
                <IconContainer>
                    <div style={{ marginRight: '55px' }}>
                        <TrendingUp />
                        <p>Track your portfolios performance in real time!</p>
                    </div>
                    <div style={{ marginRight: '55px' }}>
                        <CreditScore />
                        <p> Automate stock buying and selling!</p>
                    </div>
                    <div style={{ marginRight: '55px' }}>
                        <Leader />
                        <p>Earn financial freedom!</p>
                    </div>
                </IconContainer>

                <SignupContainer>
                    <Button
                        variant="contained"
                        style={{
                            marginRight: '100px',
                            width: '140px',
                            height: '60px',
                        }}
                    >
                        Sign Up
                    </Button>
                    <Link to="/Dashboard">
                        <Button
                            variant="outlined"
                            style={{
                                width: '140px',
                                height: '60px',
                            }}
                        >
                            Sign In
                        </Button>
                    </Link>
                </SignupContainer>
            </div>
            <VerticalBlackLine />
            <StockImageContainer>
                <Stock src={Apple}></Stock>
                <Stock src={Microsoft}></Stock>
                <Stock src={Amazon}></Stock>
            </StockImageContainer>
        </div>
    )
}

export default LandingPage
