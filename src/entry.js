import React from "react"
import {render} from "react-dom"

class Hello extends React.Component{
	render(){
		return{
			<div> "Hello" + {this.props.name}</div>
		}
	}
}
var rootElement = document.getElementById("react-app")
render(<Hello name="Mad Max"/>, rootElement)