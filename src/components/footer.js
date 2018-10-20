import React from 'react'
import styled from 'styled-components'

import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

import { device } from '../constants/breakpoints'

import Logo from '../images/negative-logo.png'

const Wrapper = styled.div`
  padding: 20px 10px;
  background-color: #f6f9fc;
  border-top: 2px solid #33333311;
  @media ${device.mobileL} {
  }
  @media ${device.laptop} {
    padding: 100px 10px;
  }
  @media ${device.desktop} {
  }
`

const LogoContainer = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  img {
    max-width: 140px;
    filter: invert(100%);
    margin: 20px 0px;
  }

  @media ${device.laptop} {
    text-align: start;
    margin-bottom: 0px;
    img {
      margin: 0px 0px;
    }
  }
`

const FooterList = styled.ul`
  list-style: none;
  font-size: 12px;
  letter-spacing: 1.1px;
  padding: 0;
  color: #b9bfcd;

  li:first-child {
    text-transform: uppercase;
    font-weight: 500;
    color: #8c93a0;
    padding-bottom: 10px;
  }

  li {
    cursor: pointer;
    padding: 6px 0px;
    &:hover {
      color: #5b74ea;
    }
  }

  @media ${device.laptop} {
    font-size: 14px;
  }
`

const Footer = ({ children }) => (
  <Wrapper>
    <Container>
      <Row className="justify-content-sm-center">
        <Col xs={12} lg={4}>
          <LogoContainer>
            <img src={Logo} alt="logo" />
          </LogoContainer>
        </Col>
        <Col xs={4} lg={2}>
          <FooterList>
            <li>Developers</li>
            <li>Documentation</li>
            <li>Github</li>
            <li>API Status</li>
          </FooterList>
        </Col>
        <Col xs={4} lg={2}>
          <FooterList>
            <li>Resources</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </FooterList>
        </Col>
        <Col xs={4} lg={2}>
          <FooterList>
            <li>Support</li>
            <li>Help Center</li>
            <li>Twitter</li>
            <li>Email</li>
          </FooterList>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
