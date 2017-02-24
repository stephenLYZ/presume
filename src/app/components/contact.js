import React, { Component, PropTypes } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { contact } = this.props
    return (
          <div className="contact">
            <div className="label">联系方式</div>
            {contact.map((item, i) => (
              <div key={i}>
                <div className="email">{ item.email } </div>
                <div className="weixin">{item.weixin} </div>
                <div className="weibo">{ item.weibo }</div>
                <div className="github">{ item.github }</div>
              </div>
            ))}
          </div>
        )
  }
}
