import React from 'react'

export default class Profile extends React.Component {
	render() {
		return (
			<div><Login /></div>
		);
	}
}

class Login extends React.Component {
	render() {
		return (
			<form>
				<input type="email" />
				<input type="password" />
				<button type="button">Login</button>
			</form>
		)
	}
}