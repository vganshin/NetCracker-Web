import React from 'react'
import { render } from 'react-dom'

class HelloMessage extends React.Component {
	render () {
		return (
			<div>Hello {this.props.name}</div>
		)
	}
}

let rootElement = document.getElementById('react-app')
render(<HelloMessage name="Mad Max" />, rootElement)