import React from "react"
import styled from "styled-components"
import logo from "../../content/assets/logo.svg"

const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  background-color: #232f3e;
  box-shadow: #e6e6e6 0 1px 3px;
  z-index: 6000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
`

const Logo = styled.img`
  float: none;
  max-height: 54%;
  margin-bottom: 0;
  vertical-align: middle;
  margin-left: 10px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Amazon Publisher Services" />
    </StyledHeader>
  )
}

export default Header
