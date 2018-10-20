import React from 'react'
import PropTypes from 'prop-types'
import ScrollToTop from 'react-scroll-up'

import Header from './header'
import Body from './body'
import Footer from './footer'

import Chevron from '../images/chevron.png'

const Layout = ({ children }) => (
  <>
    <Header />
    <Body />
    <Footer />
    <ScrollToTop showUnder={160}>
      <img
        src={Chevron}
        alt="up"
        style={{ width: 30, filter: 'opacity(25%)' }}
      />
    </ScrollToTop>
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: <div />,
}

export default Layout
