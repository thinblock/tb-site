import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device } from '../../constants/breakpoints'

const Wrapper = styled.div`
  @media ${device.mobileL} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`

const InnerWrapper = styled.div`
  display: block;
  position: relative;
  height: 44px;
  width: 100%;
  margin: 0 auto;
`

const Dot = styled.div`
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
  background-image: linear-gradient(to right, #2766e7, #33b2e0);
  border-radius: 50%;
  margin: 0 auto;
`

const Line = styled.div`
  position: absolute;
  left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background: #33333311;
  ${props =>
    props.startTrue &&
    `
      top: 50%;
      height: 50%;
  `}
  ${props =>
    props.middleTrue &&
    `
      height: 100%;
`}
  ${props =>
    props.endTrue &&
    `
     bottom: 50%;
     height: 50%;
  `}
`

const Year = styled.div`
  position: absolute;
  height: 100%;
  font-weight: 600;
  left: 0;
  width: 40px;
  height: 100%;
  line-height: 40px;
`
const Seperator = styled.div`
  position: absolute;
  height: 100%;
  left: 40px;
  width: 40px;
  height: 100%;
  text-align: center;
`
const Content = styled.div`
  position: absolute;
  height: 100%;
  left: 80px;
  line-height: 40px;
  width: 260px;
  box-sizing: none !important;
`

const TimelineContainer = ({
  start,
  end,
  middle,
  noIndicator,
  year,
  children,
}) => (
  <Wrapper>
    <InnerWrapper>
      <Year>{year}</Year>
      {!(start || end || middle || noIndicator) ? (
        <Seperator>
          <Line middleTrue />
        </Seperator>
      ) : null}
      {start && (
        <Seperator>
          <Line startTrue />
          <Dot />
        </Seperator>
      )}
      {middle && (
        <Seperator>
          <Line middleTrue />
          <Dot />
        </Seperator>
      )}
      {end && (
        <Seperator>
          <Line endTrue />
          <Dot />
        </Seperator>
      )}
      {noIndicator && <Seperator />}
      <Content>{children}</Content>
    </InnerWrapper>
  </Wrapper>
)

TimelineContainer.propTypes = {
  children: PropTypes.node,
  prominent: PropTypes.bool,
  year: PropTypes.string,
  start: PropTypes.bool,
  end: PropTypes.bool,
  middle: PropTypes.bool,
  noIndicator: PropTypes.bool,
}

TimelineContainer.defaultProps = {
  children: null,
  odd: false,
  start: false,
  end: false,
  middle: false,
  noIndicator: false,
  year: '',
}

export default TimelineContainer
