import React, { Component } from 'react';
import './App.css';
import  Container  from './components/Container'
import Panel from './components/Panel';
import { AUDIO_DESCRIPTION } from './values/values'

class App extends Component {
  constructor(props){
    super(props)
    this.handlePlay = this.handlePlay.bind(this)
    this.audio = new Audio()
    this.handlePowerChange = this.handlePowerChange.bind(this)
  }

  onKeyPressed(event){ 
    const element = document.getElementById(event.key.toUpperCase()+"-pad")
    if(element === null || element === undefined){
      return
    }
    element.click()
  }  

  handlePlay(audioId){
    try{ 
      if(!this.props.isOn){
        return
      }
      const sound = document.getElementById(audioId)
      sound.currentTime = 0
      sound.volume = this.props.volume
      sound.play()
      this.props.setLast(AUDIO_DESCRIPTION[audioId])
    } catch(err){
      console.log(err)
    }  
  }

  handlePowerChange(event, val){
    this.props.changePower(val)
  }

  handleChange = (event, val) => {
    this.props.changeVolume(val/100);
  };

  componentWillMount(){
    document.addEventListener("keydown", this.onKeyPressed.bind(this))
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyPressed.bind(this))
  }

  render() {
    return (
        <div id="drum-machine" className="App" style={appStyle}>
            <Container 
              volume={this.props.volume} 
              onPlay={this.handlePlay}
              isOn={this.props.isOn}
            />
            <Panel 
              handleChange={this.handleChange} 
              value={this.props.volume*100} 
              changePower={this.handlePowerChange}
              last={this.props.last}
              isOn={this.props.isOn}  
            />
        </div>  
    );
  }
}

const appStyle = {
  position: "relative",
  widht: 600,
}

export default App;
