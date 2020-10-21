import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div class="text">
      <p>{`
      Hi, I'm Heli! I'm a Full-Stack / Front End Developer, recently
      graduated from the Makers bootcamp and working as a journalist at
      Channel 4 News.

      I'm currently focusing on React / Gatsby, and have experience with
      Ruby / Rails.`}</p>
      <p>
      <a href="https://github.com/PacificRebel">{`
      /GitHub`}</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/heli-sivunen/">{`
      /LinkedIn`}</a>
        </p>
      </div>
    )
  }
}

export default About
