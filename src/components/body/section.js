import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { device } from '../../constants/breakpoints'

const Wrapper = styled.div`
  min-height: 200px;
  padding-bottom: 40px;
  @media ${device.tablet} {
    padding: 40px 0px;
    padding-top: 0px;
    padding-bottom: 80px;
  }
  @media ${device.laptop} {
    padding: 50px 0px;
    padding-top: 80px;
    padding-bottom: 60px;
  }
  ${props =>
    props.odd &&
    `
      background-color: #f6f9fc;
      clip-path: polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%);
      padding: 40px 0px;
      padding-bottom: 80px;
      @media ${device.tablet} {
        padding: 80px 0px;
        padding-top: 50px;
        padding-bottom: 130px;
        clip-path: polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%);
      }
      @media ${device.laptop} {
        padding: 100px 0px;
        padding-top: 150px;
        padding-bottom: 150px;
        clip-path: polygon(0 80px, 100% 0, 100% calc(100% - 80px), 0 100%);
      }
  `} ${props =>
    props.final &&
    `
    background-color: #f6f9fc;
      clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 100%);
      padding: 80px 0px;
      padding-bottom: 80px;
      @media ${device.tablet} {
        padding: 80px 0px;
        padding-top: 100px;
        padding-bottom: 80px;
        clip-path: polygon(0 60px, 100% 0, 100% 100%, 0 100%);
      }
      @media ${device.laptop} {
        padding: 100px 0px;
        padding-top: 180px;
        padding-bottom: 120px;
        clip-path: polygon(0 80px, 100% 0, 100% 100%, 0 100%);
      }   

  `};
`
const Section = ({ odd, final, children }) => (
  <Wrapper odd={odd} final={final}>
    <div>{children}</div>
  </Wrapper>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  odd: PropTypes.bool,
  final: PropTypes.bool,
}

Section.defaultProps = {
  odd: false,
  final: false,
}

export default Section
