import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device } from '../../constants/breakpoints'
import TimelineContainer from './timeline-container'

const Wrapper = styled.div`
  /* text-align: center; */
  padding-top: 50px;

  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
    padding-top: 0px;
  }
`

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h4 {
    font-weight: 200;
    letter-spacing: 0.2px;
    max-width: 260px;
    margin: 0 auto;
    font-size: 20px;
  }
`
const TimelineWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
`

const Roadmap = ({ children }) => (
  <Wrapper>
    <HeaderWrapper>
      <h1>
        <b>Roadmap</b>
      </h1>
      <h4>We have a lot of exciting stuff coming. Stay tuned!</h4>
    </HeaderWrapper>
    <TimelineWrapper>
      <TimelineContainer start year={'2017'} prominent>
        <b>November:</b> Early Stage Concept
      </TimelineContainer>
      <TimelineContainer />
      <TimelineContainer middle year={'2018'}>
        <b>April:</b> Concept Validation
      </TimelineContainer>
      <TimelineContainer>
        <b>July:</b> Development Kickoff
      </TimelineContainer>
      <TimelineContainer>
        <b>November:</b> Prototype API
      </TimelineContainer>
      <TimelineContainer />
      <TimelineContainer end year={'2019'}>
        <b>April:</b> Concept Validation
      </TimelineContainer>
      <TimelineContainer noIndicator>
        <b>June:</b> Official Launch
      </TimelineContainer>
    </TimelineWrapper>
    <div>{children}</div>
  </Wrapper>
)

Roadmap.propTypes = {
  children: PropTypes.node,
  odd: PropTypes.bool,
}

Roadmap.defaultProps = {
  children: <div />,
  odd: false,
}

export default Roadmap
