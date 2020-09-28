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

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>

)

export default IndexPage
