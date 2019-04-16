import React, { Component}  from "react";
import Pad from "./Pad";

import Paper from '@material-ui/core/Paper';

class Container extends Component {
    render(){
        return(
            <Paper style={paperStyle}>
                <div id="display_" style={divStyle} tabIndex="0">
                        <Pad character="Q"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="W"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="E"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="A"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="S"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="D"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="Z"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="X"  onPlay={this.props.onPlay}></Pad>
                        <Pad character="C"  onPlay={this.props.onPlay}></Pad>                    
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