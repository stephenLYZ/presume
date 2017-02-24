import React, { Component, PropTypes } from 'react'

export default class Skills extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { skills } = this.props
    return (
          <div className="skills">
            <div className="label">技能</div>
            {skills.map((item, i) => (
              <div key={i} className="line">
                <div className="name">{ item.name } </div>
                {item.keyword.map((key, i) => (
                  <div key={i}>
                    <div className="key">{ key.key }</div>
                    <div className="description">{ key.description } </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
  }
}
