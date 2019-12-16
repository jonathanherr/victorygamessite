import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GameListing = () => (
  <Layout>
    <SEO title="All The Games!" />
    <h1>Games Games Games</h1>
    <p>Welcome to the games!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GameListing
