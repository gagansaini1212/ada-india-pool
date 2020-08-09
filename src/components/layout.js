import React from "react"
import Helmet from "react-helmet"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle, { theme } from "../utils/theme"
import config from "../utils/config"
import Header from "./header"
// import Nav from "./Nav"
// import Footer from "./Footer"

const Container = styled.div`
  min-height: 90vh;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      <Container id="wrapper" className="fade-in">
        <Header />
        <Nav />
        <div id="main" role="main">
          {children}
        </div>
        {/* <Footer /> */}
      </Container>
    </>
  </ThemeProvider>
)

export default Layout
