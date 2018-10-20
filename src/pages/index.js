import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

import { StaticQuery, graphql } from 'gatsby'

import './index.css'

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
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <script src="https://embed.runkit.com/" type="text/javascript" />
        </Helmet>
        <Layout />
      </>
    )}
  />
)

export default IndexPage
