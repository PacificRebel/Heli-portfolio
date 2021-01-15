import React, { Component } from 'react'

class ProjectOneDetails extends Component {
  constructor(props) {
    super(props)
      this.state = { starredUserData: [] }
    };

  componentDidMount() {
    fetch("https://api.github.com/users/PacificRebel/starred")
    .then(response => response.json())
    .then(data => {
      this.setState({starredUserData: data})
    })
  }

  render() {
    const data = this.state.starredUserData
    console.log(data)
    let name = ''
    let description = ''
    let homepage = ''
    if (data.length > 0) {
      name = data[0].name
      description = data[0].description
      homepage = data[0].homepage
    }

    return (
      <div className="projectdetails">
      <div>{name}</div>
      <div><br></br></div>
      <div>{description}</div>
      <div><br></br></div>
      <a href={homepage}>The site is live here!</a>
      </div>
     )
   }
 }

 export default ProjectOneDetails
