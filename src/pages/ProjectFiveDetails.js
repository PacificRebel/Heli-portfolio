import React, { Component } from 'react'

class ProjectFiveDetails extends Component {
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
      name = data[4].name
      description = data[4].description
      homepage = data[4].homepage
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

 export default ProjectFiveDetails
