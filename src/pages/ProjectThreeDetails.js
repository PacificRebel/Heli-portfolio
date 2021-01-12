import React, { Component } from 'react'

class ProjectThreeDetails extends Component {
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
      name = data[2].name
      description = data[2].description
      homepage = data[2].homepage
    }

    return (
      <div className="projectdetails">
      <span>
      {name}<p>{`
        `}</p>{description}
      </span>
      <a href={homepage}>{homepage}</a>
      </div>
     )
   }
 }

 export default ProjectThreeDetails
