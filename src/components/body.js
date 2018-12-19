import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/styles/hljs'

import Section from './body/section'
import Features from './body/features'
import Roadmap from './body/roadmap'

import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Button from 'react-bootstrap/lib/Button'

import { device } from '../constants/breakpoints'

import DataMiningImage from '../images/data-mining@2x.png'
import LaboratoriumImage from '../images/laboratorium@2x.png'
import CurrenciesImage from '../images/exchanges.png'

import { codeString } from '../snippets/code'

const Wrapper = styled.div`
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`

const InnerWrapper = styled.div`
  position: relative;
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`

const HookContainer = styled.div`
  text-align: center;
  padding: 10px 12px;
  @media ${device.laptop} {
    text-align: start;
    padding: 4px 0px;
  }
`

const ButtonsContainer = styled.div`
  text-align: center;
  padding: 10px 12px;
  @media ${device.laptop} {
    padding: 4px 0px;
  }
`

const SectionContainer = styled(Container)`
  position: relative;
`
const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h3 {
    font-weight: 700;
    letter-spacing: 0.9px;
    padding: 20px 0px;
  }
  @media ${device.laptop} {
    text-align: start;
    .pull-right {
      text-align: end;
    }
  }
`

const ImageContainer = styled.div`
  height: 200px;
  width: 100%;
  img {
    max-height: 80%;
    max-width: 60%;
    width: auto;
    height: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin:auto;
    margin-bottom: 10px;
  }

  @media ${device.tablet} {
    height: 300px;
  }
  @media ${device.laptop} {
   img{
    margin-left: 1rem;
   } 
  }
  @media ${device.desktop} {
  }
`
const RightImageContainer = styled(ImageContainer)`
  @media ${device.laptop} {
    img{
      margin-left: 8rem;
    }
  }
`
const SyntaxHighlighterWrapper = styled(SyntaxHighlighter)`
  border-radius: 5px;
  box-shadow: 0px 1px 1.5px #33333355;

  &::-webkit-scrollbar {
    height: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.03);
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.15);
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    /* display: none; */
    background: rgba(0, 0, 0, 0.1);
  }
`

const Primary = styled.div`
  background-image: linear-gradient(to right, #5b74ea, #33b2e0);
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.6px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${device.tablet} {
    font-size: 36px;
    letter-spacing: 2px;
  }
`
const Secondary = styled.div`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.3px;
  color: #000000;

  @media ${device.tablet} {
    font-size: 28px;
    letter-spacing: 0.5px;
  }
`

const ButtonWrapper = styled(Button)`
  width: 150px;
  height: 40px;
  margin: 6px 10px;
  text-transform: uppercase;
  font-size: 12px !important;
  box-shadow: 0 2px 5px 0 #c7dbfb;
  &:hover {
    box-shadow: 0 5px 10px 0 #c7dbfb;
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

const LineContainerStyle = {
  float: 'left',
  paddingRight: '10px',
  background: '#ecffec',
  color: '#2bbd74',
  padding: '0.5rem',
  marginTop: '-0.5rem',
  marginBottom: '-0.5rem',
  marginLeft: '-0.5rem',
  marginRight: '10px',
  overflow: 'hidden',
}


const Body = ({ children }) => (
  <Wrapper>
    <Section>
      <Features />
    </Section>
    <Section odd>
      <InnerWrapper>
        <SectionContainer>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: 1 }}>
              <TitleWrapper>
                <h3>Schedule triggers with different sources for events</h3>
              </TitleWrapper>
              <SyntaxHighlighterWrapper
                showLineNumbers
                lineNumberContainerStyle={LineContainerStyle}
                language="javascript"
                style={githubGist}
              >
                {codeString}
              </SyntaxHighlighterWrapper>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 4, order: 2 }}
              className="text-center"
            >
              <RightImageContainer>
                <img src={DataMiningImage} alt="data mining" />
              </RightImageContainer>
            </Col>
          </Row>
        </SectionContainer>
      </InnerWrapper>
    </Section>
    <Section>
      <InnerWrapper>
        <SectionContainer>
          <Row>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 4, order: 1 }}
              className="text-center"
            >
              <ImageContainer>
                <img src={LaboratoriumImage} alt="laboratorium" />
              </ImageContainer>
            </Col>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: 2 }}>
              <TitleWrapper>
                <h3 className="pull-right">
                  Execute actions and get notified when triggers are activated
                </h3>
              </TitleWrapper>

              <SyntaxHighlighterWrapper
                showLineNumbers
                lineNumberContainerStyle={LineContainerStyle}
                language="javascript"
                style={githubGist}
              >
                {codeString}
              </SyntaxHighlighterWrapper>
            </Col>
          </Row>
        </SectionContainer>
      </InnerWrapper>
    </Section>
    <Section odd>
      <InnerWrapper>
        <SectionContainer>
          <Row>
            <Col xs={{ span: 12, order: 2 }} lg={{ span: 8, order: 1 }}>
              <TitleWrapper>
                <h3>
                  Use wallets or exchanges API integration to automate execution
                </h3>
              </TitleWrapper>
              <SyntaxHighlighterWrapper
                showLineNumbers
                lineNumberContainerStyle={LineContainerStyle}
                language="javascript"
                style={githubGist}
              >
                {codeString}
              </SyntaxHighlighterWrapper>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              lg={{ span: 4, order: 2 }}
              className="text-center"
            >
              <RightImageContainer>
                <img src={CurrenciesImage} alt="currencies" />
              </RightImageContainer>
            </Col>
          </Row>
        </SectionContainer>
      </InnerWrapper>
    </Section>
    <Section>
      <Roadmap />
    </Section>
    <Section odd final>
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs={12} lg={5}>
            <HookContainer>
              <Primary>Ready to get started?</Primary>
              <Secondary>Get in touch or read the docs</Secondary>
            </HookContainer>
          </Col>
          <Col xs={12} lg={5}>
            <ButtonsContainer style={{ paddingTop: '20px' }}>
            <a href="mailto:hello@thinblock.io">
              <RequestButton>Request access</RequestButton>
            </a>
            <a href="https://docs.thinblock.io" target="_blank">
              <DocsButton>Docs</DocsButton>
            </a>
             
            </ButtonsContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  </Wrapper>
)

export default Body
