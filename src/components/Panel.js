import React, { Component} from 'react'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const theme = createMuiTheme({
    overrides: {
        MuiSlider: {
            track: { backgroundColor: 'red' },
            thumb: { backgroundColor: 'red' },
        }
    }   
})

class Panel extends Component {
    render(){
        return (
            <Paper style={mainStyle}>
                <div style={{height: 320}}> 
                    <h3>Panel</h3>
                    <div style = {{width: "100%", display: 'inline-block'}}>
                        <div style={itemLeftStyle}>
                        <Typography style={{textAlign: "left", marginLeft: 10, marginTop: 20}}>Drum machine</Typography>
                        </div>
                        <div style={itemRightStyle}>
                            <Switch></Switch>
                        </div>
                    </div>

                    <div style = {{width: "100%"}}>                    
                        <Typography  style={{textAlign: "left", marginLeft: 20}}>Volume</Typography>
                        <div style={{margin: 10,  marginLeft: 20, marginRight: 20}}>
                        
                            <MuiThemeProvider theme={theme}>
                                <Slider 
                                    max={100}
                                    value={this.props.value}
                                    onChange={this.props.handleChange}
                                />
                            </MuiThemeProvider>
                        
                        </div>
                    </div>  
                    <div style = {{width: "100%", display: 'inline-block'}}>
                        <div style={itemLeftStyle}>
                        <Typography style={{textAlign: "left", marginLeft: 10, marginTop: 20}}>Last</Typography>
                        </div>
                        <div style={itemRightStyle}>
                            <p id="display">{this.props.last}</p>
                        </div>
                    </div>                      
                </div>             
                <div style = {{width: "100%", display: 'inline-block'}}>
                    <Typography >Made with ❤ by Andres Hoyo</Typography>
                </div>
            </Paper>
        )
    }
}


const itemLeftStyle = {
    margin: 0,
    marginLeft: 10,
    float: 'left',
    height: 50,
} 


const itemRightStyle = {
    margin: 0,
    float: 'right',
    height: 50,
    width: 100
} 

const mainStyle = {
    width: 300,
    height: 360,
    display: 'inline-block',
    margin: 20,
}



export default Panel