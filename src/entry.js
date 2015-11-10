import React from "react"
import {render} from "react-dom"
import {createStore} from "redux"
var TimerExample = React.createClass({
    getInitialState: function(){
        return { elapsed: 0 };
    },
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 500);
    },
    componentWillUnmount: function(){
        clearInterval(this.timer);
    },
    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },
    render: function() {        
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);  

        return <p>Вы на этой странице <b>{seconds} секунд</b> </p>;
    }
});
render(
    <TimerExample start={Date.now()} />,document.getElementById("react-app")
);
