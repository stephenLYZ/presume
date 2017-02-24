import React, { Component, PropTypes } from 'react'

export default class Education extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { education } = this.props
    return (
          <div className="education">
            <div className="label">教育经历</div>
            {education.map((item, i) => (
              <div key={i} className="line">
                <div className="study-type">{ item.study_type } </div>
                <div className="date">{item.start_date} ~ {item.end_date} </div>
                <div className="university">{ item.university }</div>
                <div className="profession">{ item.profession }</div>
              </div>
            ))}
          </div>
        )
  }
}
