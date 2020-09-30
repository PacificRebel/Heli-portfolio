import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ProjectThree from "../components/ProjectThree"
import ProjectOne from "../components/ProjectOne"
import "./styling.scss"
import { Column, Row } from 'simple-flexbox';

class IndexPage extends Component{
  render(){
    return(
      <Layout>
  <SEO title="Home" />
  <h2>Projects</h2>

  {/* <Link to="/using-typescript/">Link to Typescript info page</Link>*/}

      <Column>
            <div class="container">

                        <section class="cards">

                        <article class="card">
                        <div class="text">
                          <p><ProjectOne /></p>
                          </div>
                        </article>

                            <article class="card">
                            <div class="text">
                              <p><ProjectThree /></p>
                              </div>
                            </article>

                        </section>
            </div>
            </Column>
</Layout>
    )
  }
}


export default IndexPage
