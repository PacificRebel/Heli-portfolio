import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "./styling.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Projects</h2>

    <Link to="/page-2/">Team 6 Game</Link> <br />
    <Link to="/using-typescript/">Headline Search</Link>
  </Layout>

)

export default IndexPage
