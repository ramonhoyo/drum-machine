import React, { Component}  from "react";
import Pad from "./Pad";

import Paper from '@material-ui/core/Paper';

class Container extends Component {
    render(){
        return(
            <Paper style={paperStyle}>
                <div id="display_" style={divStyle} tabIndex="0">
                        <Pad character="Q"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="W"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="E"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="A"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="S"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="D"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="Z"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="X"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>
                        <Pad character="C"  isOn={this.props.isOn} onPlay={this.props.onPlay}></Pad>                    
                </div>
            </Paper>
           
        );
    }
}

const divStyle = {
    width: 380,
    display: 'inline-grid',
    gridColumnGap: 10,  
    gridTemplateColumns: 'auto auto auto',
}

const paperStyle = {
    width: 380,
    height: 360,
    display: "inline-block",
    float: "left",
    margin: 20,    
}

export default Container;