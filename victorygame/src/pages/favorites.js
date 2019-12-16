import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Favorites = () => (
  <Layout>
    <SEO title="Favorite Games" />
    <ol>
        <li><a target="_blank" href="https://www.abcya.com/games/duck_life">Duck Life from ABCYa!</a></li>
        <li><a target="_blank" href="https://www.abcya.com/games/duck_life_2">Duck Life 2 from ABCYa!</a></li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Favorites
