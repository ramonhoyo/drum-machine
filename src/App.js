import React, { Component } from 'react';
import './App.css';
import  Container  from './components/Container'
import Panel from './components/Panel';
import { AUDIO_DESCRIPTION } from './values/values'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      volume : 0.5,
      last: '',
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.audio = new Audio()
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
      const sound = document.getElementById(audioId)
      sound.currentTime = 0
      sound.volume = this.state.volume
      sound.play()
      this.setState({
        last: AUDIO_DESCRIPTION[audioId]
      })
    } catch(err){
      console.log(err)
    }  
  }

  handleChange = (event, val) => {
    this.setState({ volume: val/100 });
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
          <Container volume={this.state.volume} onPlay={this.handlePlay}/>
          <Panel handleChange={this.handleChange} value={this.state.volume*100} last={this.state.last}/>
      </div>
    );
  }
}

const appStyle = {
  position: "relative",
  widht: 600,
}

export default App;
