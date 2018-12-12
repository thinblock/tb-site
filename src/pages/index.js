import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'
import './index.css'

require('bootstrap/dist/css/bootstrap.css')

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Thinblock connects blockchain platforms with third-party services to help you build smart applications.',
            },
            { name: 'keywords', content: 'blockchain, payments, wallets' },
          ]}
        >
          <html lang="en" />
          <script src="https://embed.runkit.com/" type="text/javascript" />
        </Helmet>
        <Layout />
      </>
    )}
  />
)

export default IndexPage
