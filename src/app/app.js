import React, { Component, PropTypes } from 'react'

import Black from './themes/black'
import Blue from './themes/blue'
import Clean from './themes/clean'

export default class App extends Component {
	static propTypes = {
		config: PropTypes.object,
		name: PropTypes.string,
		label: PropTypes.string,
		avatar: PropTypes.string,
		contact: PropTypes.array,
		education: PropTypes.array,
		projects: PropTypes.array,
		work: PropTypes.array,
		skills: PropTypes.array,
		children: PropTypes.object
	}

	static defaultProps = {
		config: window.config,
		name: window.config.name,
		label: window.config.label,
		avatar: window.config.avatar,
		contact: window.config.contact,
		education: window.config.education,
		work: window.config.work,
		projects: window.config.projects,
		skills: window.config.skills
	}

	constructor(props) {
		super(props)
		this.state = {
			theme: this.props.config.theme
		}
	}

	render() {
		const { theme } = this.state

		switch (theme) {
			case 'blue':
				return <Blue {...this.props} />

			case 'black':
				return <Black {...this.props} />

			case 'clean':
			  return <Clean {...this.props} />

			default:
				return <Blue {...this.props} />
		}
	}
}
