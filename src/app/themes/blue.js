import React, { Component, PropTypes } from 'react'

// import component
import Header from '../components/header'
import Education from '../components/education'
import Work from '../components/work'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Skills from '../components/skills'

export default class Blue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="blue-container">
        <Header {...this.props} />
        <div className="up">
          <Education {...this.props} />
          <Contact {...this.props} />
        </div>
        <div>
          <Skills {...this.props} />
          <Work {...this.props} />
          <Projects {...this.props} />
        </div>
      </div>
    )
  }
}
