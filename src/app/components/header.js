import React, { Component } from 'react'
import { Card } from 'react-mdl'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { name, label, avatar } = this.props

    return (
      <div className="header-container">
        <div className="name">{name}</div>
        <div className="label">{label}</div>
        <div className="avatar">
          <img src={avatar} title="avatar" />
        </div>
      </div>
    )
  }
}
