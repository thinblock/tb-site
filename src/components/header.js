import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/lib/Container'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'
import Button from 'react-bootstrap/lib/Button'

import Logo from '../images/negative-logo.png'
import Illustration from '../images/header-illustration.png'

import { device } from '../constants/breakpoints'

const Wrapper = styled.div`
  position: relative;
  font-family: 'Nunito Sans', sans-serif;
  width: 100%;
  background: rgb(24, 87, 200);
  overflow: hidden;
  background: -moz-linear-gradient(
    90deg,
    rgba(24, 87, 200, 1) 0%,
    rgba(0, 200, 255, 1) 120%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(24, 87, 200, 1) 0%,
    rgba(0, 200, 255, 1) 120%
  );
  background: linear-gradient(
    90deg,
    rgba(24, 87, 200, 1) 0%,
    rgba(0, 200, 255, 1) 120%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1857c8",endColorstr="#00c8ff",GradientType=1);

  @media ${device.mobileL} {
    /* height: 640px; */
  }
  @media ${device.tablet} {
    /* height: 720px; */
  }
  @media ${device.desktop} {
    /* height: 800px; */
  }
`

const NavbarWrapper = styled(Navbar)`
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px 0px !important;

  a {
    color: #ffffff !important;
    padding-right: 0.8rem !important;
    padding-left: 0.8rem !important;
    &:hover {
      color: #ebeaff !important;
    }
  }

  .btn-outline-success {
    color: white;
    border-color: white;
    font-size: 14px;
    letter-spacing: 1px;
  }
  @media ${device.tablet} {
    padding-top: 20px !important;
  }
`

const LogoContainer = styled.div`
  img {
    max-width: 130px;
    margin: 0 auto;
    margin-bottom: 5px;
  }
`

const JumbotronWrapper = styled(Jumbotron)`
  background-color: transparent !important;
  margin-top: 0px;
  padding-bottom: 0px !important;
  color: #ffffff;
  text-align: center;

  @media ${device.mobileL} {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    margin-top: 30px;
  }
  @media ${device.desktop} {
    margin-top: 40px;
  }
`

const ButtonWrapper = styled(Button)`
  width: 150px;
  height: 40px;
  margin: 6px 10px;
  text-transform: uppercase;
  box-shadow: 0 2px 5px 0 #0a49ac;
  font-size: 12px !important;
  &:hover {
    box-shadow: 0 5px 10px 0 #0a49ac;
  }
`

const RequestButton = styled(ButtonWrapper)`
  background-color: #fefefe !important;
  border-radius: 5px;
  border: solid 1px #ffffff !important;
  color: #1857c8 !important;
`

const DocsButton = styled(ButtonWrapper)`
  background-color: #0a49ac !important;
  border-radius: 5px;
  border: solid 1px #0a49ac !important;
  color: #fefefe !important;
`

const IllustrationWrapper = styled.div`
  position: relative;
  text-align: center;
  bottom: 0;
  left: 0;
  width: 100%;
  img {
    position: relative;
    z-index: 0;
    margin: 0 auto;
    max-width: 100%;
  }
`

const Title = styled.div`
  padding: 0px 10px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 20px;
  p {
    font-weight: 200;
    max-width: 460px;
    margin: 0 auto;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #fefefe;
  }
`

const Header = ({ children }) => (
  <Wrapper>
    <Container>
      <NavbarWrapper collapseOnSelect expand="md" bg="transparent">
        <Navbar.Brand href="#home">
          <LogoContainer>
            <img src={Logo} alt="Logo" />
          </LogoContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#deets">Our Solution</Nav.Link>
            <Nav.Link href="#deets">Roadmap</Nav.Link>
            <Nav.Link href="#deets">API</Nav.Link>
            <Nav.Link href="#deets">FAQ</Nav.Link>
            <Nav.Link style={{ padding: 0 }}>
              <Button variant="outline-success">Contact Sales</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </NavbarWrapper>
    </Container>
    <JumbotronWrapper>
      <Title>
        <h1>
          <b>Automation for blockchains</b>
        </h1>
        <p>
          Thinblock connects blockchain platforms with third-party services to
          help you build smart applications.
        </p>
      </Title>
      <RequestButton>Request access</RequestButton>
      <DocsButton>Docs</DocsButton>
    </JumbotronWrapper>
    <IllustrationWrapper>
      <img src={Illustration} alt="Illustration" />
    </IllustrationWrapper>
  </Wrapper>
)

export default Header
