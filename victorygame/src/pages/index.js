import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi gamers!</h1>
    <p>Welcome the Victory Gaming website.</p>
    <p>Now go play games!</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
    <Link to="/favorites/">Our Favorite Games on the 'Net!</Link>
    </div>
    <div>
    <Link to="/games/">Show me the games!</Link>
    </div>
  </Layout>
)

export default IndexPage
