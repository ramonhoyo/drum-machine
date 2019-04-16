import  React, {Component} from "react";
import { AUDIO_MAP } from "../values/values"; 

class Pad extends Component {
    constructor(props){
        super(props)
        this.urlMusic = AUDIO_MAP[this.props.character]
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.onPlay(this.props.character)
    }

    render(){
        return(
            <div 
                id={this.props.character+"-pad"} 
                className="ripplelink drum-pad" 
                onClick={this.handleClick} style={divStyle}
            >
                <h1 style={h1Style}>{this.props.character}</h1>
                <audio 
                    id={this.props.character} className="clip"
                    src={AUDIO_MAP[this.props.character]}>    
                </audio>
            </div>
        ); 
    }
}

const divStyle = {
    backgroundColor : '#d81b60',
    height: 100,
    width: 100,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    cursor: 'pointer',
}

//from https://stackoverflow.com/a/4407335/8749345
const h1Style = {
    WebkitTouchCallout : 'none', /* iOS Safari */
    WebkitUserSelect: "none", /* Safari */
    KhtmlUserSelect: "none", /* Konqueror HTML */
    MozUserSelect: "none", /* Firefox */
    msUserSelect: "none", /* Internet Explorer/Edge */
    userSelect: "none" /* Non-prefixed version, currently supported by Chrome and Opera */
}

export default  Pad;