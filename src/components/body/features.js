import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Jumbotron from 'react-bootstrap/lib/Jumbotron'

import { device } from '../../constants/breakpoints'

import AppsImage from '../../images/Apps@2x.png'
import CodeImage from '../../images/Code@2x.png'
import WalletImage from '../../images/Crypto_Wallet@2x.png'
import PaymentsImage from '../../images/Secure_Payments@2x.png'
import CryptoImage from '../../images/Crypto@2x.png'

const Wrapper = styled.div`
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`

const JumbotronWrapper = styled(Jumbotron)`
  background-color: transparent !important;
  text-align: center;
  margin-bottom: 0 !important;
  h2 {
    font-weight: 700;
    margin-bottom: 16px;
  }
  h4 {
    font-size: 20px;
    font-weight: 300;
    max-width: 70vw;
    margin: 0 auto;
  }
`

const FeatureWrapper = styled.div`
  max-width: 220px;
  margin: 0 auto;
  padding: 20px 0px;
  h4 {
    font-size: 14px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    font-weight: 200;
  }

  @media ${device.mobileS} {
    text-align: center;
    max-width: 220px;
  }

  @media ${device.laptop} {
    text-align: start;
    max-width: 140px;
  }
`

const FeatureImage = styled.div`
  position: relative;
  height: 80px;
  img {
    position: absolute;
    bottom: 20px;
    left: 0;
    max-height: 80%;
  }
  @media ${device.mobileS} {
    img {
      position: relative;
      bottom: 0;
      margin: 0 auto;
    }
  }
  @media ${device.laptop} {
    img {
      position: absolute;
      bottom: 20px;
      left: 0;
      max-height: 80%;
    }
  }
`

const Features = ({ children }) => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <JumbotronWrapper>
            <h2>Empower your blockchain workflows</h2>
            <h4>
              ThinBlock provides a interoperability layer to connect APIs, apps,
              wallets, exchanges and blockchains.
            </h4>
          </JumbotronWrapper>
        </Col>
      </Row>
      <Row className="justify-content-sm-center">
        <Col xs={12} sm={4} md={4} lg={2} className="feature">
          <FeatureWrapper>
            <FeatureImage>
              <img src={CodeImage} alt="" />
            </FeatureImage>
            <h4>APIs</h4>
            <p>
              User our automation API to invoke triggers or be notified when an
              event happened
            </p>
          </FeatureWrapper>
        </Col>
        <Col xs={12} sm={4} md={4} lg={2} className="feature">
          <FeatureWrapper>
            <FeatureImage>
              <img src={AppsImage} alt="" />
            </FeatureImage>
            <h4>Apps</h4>
            <p>
              Access to countless integrations with your daily apps via Zapier
              integration
            </p>
          </FeatureWrapper>
        </Col>
        <Col xs={12} sm={4} md={4} lg={2} className="feature">
          <FeatureWrapper>
            <FeatureImage>
              <img src={PaymentsImage} alt="" />
            </FeatureImage>
            <h4>Exchanges</h4>
            <p>
              We connect to the most popular exchanges in order to help you
              automating your trading
            </p>
          </FeatureWrapper>
        </Col>
        <Col xs={12} sm={4} md={4} lg={2} className="feature">
          <FeatureWrapper>
            <FeatureImage>
              <img src={WalletImage} alt="" />
            </FeatureImage>
            <h4>Wallets</h4>
            <p>
              Use our wallet as a service with zero-knowledge to seamlessly
              integrate wallets and automation
            </p>
          </FeatureWrapper>
        </Col>
        <Col xs={12} sm={4} md={4} lg={2} className="feature">
          <FeatureWrapper>
            <FeatureImage>
              <img src={CryptoImage} alt="" />
            </FeatureImage>
            <h4>Blockchains</h4>
            <p>
              Automatically create transactions, invoke smart contracts or
              receive security notifications
            </p>
          </FeatureWrapper>
        </Col>
      </Row>
    </Container>
    <div>{children}</div>
  </Wrapper>
)

Features.propTypes = {
  children: PropTypes.node,
}

Features.defaultProps = {
  odd: false,
  children: <div />,
}

export default Features
