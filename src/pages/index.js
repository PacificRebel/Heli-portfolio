import React, { Component } from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import ProjectOne from "../components/ProjectOne"
import ProjectTwo from "../components/ProjectTwo"
import ProjectThree from "../components/ProjectThree"
import ProjectFour from "../components/ProjectFour"
import ProjectFive from "../components/ProjectFive"
import ProjectSix from "../components/ProjectSix"
import About from "../components/About"

import "./styling.scss"
import { Column} from 'simple-flexbox';

class IndexPage extends Component{
  render(){
    return(

      <Column>
            <div class="container">

                        <section class="cards">

                        <article class="card">
                        <div class="header">
                          <p><h2>Heli Sivunen</h2></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="Header">
                          <p><h3>Front End Developer</h3></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="header">
                          <p><h3><About /></h3></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="text">
                          <p><h3>Projects</h3></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="text">
                          <p></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="text">
                          <p></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="text">
                          <p><ProjectOne /></p>
                          </div>
                        </article>

                        <article class="card">
                        <div class="text">
                          <p><ProjectTwo /></p>
                          </div>
                        </article>

                            <article class="card">
                            <div class="text">
                              <p><ProjectThree /></p>
                              </div>
                            </article>

                            <article class="card">
                            <div class="text">
                              <p><ProjectFour /></p>
                              </div>
                            </article>

                            <article class="card">
                            <div class="text">
                              <p><ProjectFive /></p>
                              </div>
                            </article>

                            <article class="card">
                            <div class="text">
                              <p><ProjectSix /></p>
                              </div>
                            </article>

                        </section>
                  </div>
            </Column>
    )
  }
}

export default IndexPage
