import React, { Component, PropTypes } from 'react'

export default class Work extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { work } = this.props
    return (
          <div className="work">
            <div className="label">工作经验</div>
            {work.map((item, i) => (
              <div key={i} className="line">
                <div className="company">{ item.company } </div>
                <div className="date">{item.start_date} ~ {item.end_date} </div>
                <div className="position">{ item.position }</div>
                <div className="description">{ item.description }</div>
              </div>
            ))}
          </div>
        )
  }
}
