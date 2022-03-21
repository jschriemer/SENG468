/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/AccountProfile";
import { AccountProfileDetails } from "../components/AccountProfileDetails";

const mobile = `@media (max-width: 500px)`;

const SignupContainer = styled.div`
  max-width: 800px;
  ${mobile} {
    max-width: 500px;
  }
`;

const VerticalBlackLine = styled.hr`
  width: 100%;
  color: black;
  transform: rotate(180deg);
`;

export default function Account() {
  return (
    <div style={{ display: "flex" }}>
      <ResponsiveAppBar />
        <title>Account | Material Kit</title>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <SignupContainer></SignupContainer>
      <VerticalBlackLine />
      <Link to="/">Home</Link>
      <Link to="/dashboard/">Dashboard</Link>
      <Link to="/account/">Account</Link>
    </div>
  );
}
