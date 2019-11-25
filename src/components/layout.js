import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import SearchBar from "./searchbar"
import Header from "./header"
import GetPosts from "../hooks/get-posts"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
}

html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 18px;
    line-height: 1.4;
    /* remove margin for the main div that Gatsby mounts into */
    > div {
      margin-top: 0;
    }
  }
`

const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 95vw;
  padding: 20px 0;
  display: flex;
  height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  overflow: none;
`

const LeftContainer = styled.div`
  width: 22%;
  border-right: 1px solid #ccc;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    display: inline;
  }
`

const RightContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  overflow-y: auto;
`

const NavList = styled.ul`
  padding: 0px 15px;
  margin: 0;
  padding-left: 15px;
  background-color: #fff;
  list-style: none;

  li {
    padding-top: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    list-style-type: none;
    background-color: #fff;
    font: normal 14px Amazon Ember, Helvetica, Arial, sans-serif;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;

  :hover {
    color: #e48700;
  }

  &.current-page {
    color: #e48700;
  }
`

const Layout = ({ children }) => {
  const posts = GetPosts()

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <LeftContainer>
          <h3>Video Ad Server Documentation</h3>
          <SearchBar />
          <NavList>
            <li>
              <StyledLink to="/" activeClassName="current-page">
                Getting Started
              </StyledLink>
            </li>
            {posts.map(({ slug, title }) => {
              return (
                <li key={slug}>
                  <StyledLink to={slug} activeClassName="current-page">
                    {title}
                  </StyledLink>
                </li>
              )
            })}
          </NavList>
        </LeftContainer>
        <RightContainer>{children}</RightContainer>
      </MainContainer>
      <footer></footer>
    </>
  )
}

export default Layout
