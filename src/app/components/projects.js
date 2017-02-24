import React, { Component, PropTypes } from 'react'

export default class Work extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { projects } = this.props
    return (
          <div className="projects">
            <div className="label">个人项目</div>
            {projects.map((item, i) => (
              <div key={i} className="line">
                <div className="link">
                  <a className="github-link" href={ item.github_link }>源代码</a>
                  <a className="demo-link" href= { item.demo_link }> Demo </a>
                </div>
                <div className="name">{ item.name } </div>
                <div className="description">{ item.description }</div>
              </div>
            ))}
          </div>
        )
  }
}
