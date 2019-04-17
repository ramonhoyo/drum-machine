import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { connect, Provider } from "react-redux";
import { store } from './data/store'
import { volumeChangeCreator , lastKeyPressed, powerChange} from "./data/actionsCreator";

const mapsStateToProps = (state) => {
  return  {
    volume: state.volume,
    last: state.lastKeyPressed,
    isOn: state.isOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeVolume : function(value) {
      dispatch(volumeChangeCreator(value))
    },
    setLast: function(last){
      dispatch(lastKeyPressed(last))
    },
    changePower: function(value){
      dispatch(powerChange(value))
    }
  }
}


let AppConnected = connect(mapsStateToProps, mapDispatchToProps)(App)



ReactDOM.render(
    <Provider store={store}>
        <AppConnected />
    </Provider>
    ,    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var links = document.querySelectorAll('.ripplelink');

for (var i = 0, len = links.length; i < len; i++) {
  links[i].addEventListener('click', function(e) {
    var targetEl = e.target;
    var inkEl = targetEl.querySelector('.ink');

    if (inkEl) {
      inkEl.classList.remove('animate');
    }
    else {
      inkEl = document.createElement('span');
      inkEl.classList.add('ink');
      inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
      targetEl.appendChild(inkEl);
    }

    inkEl.style.left = (e.offsetX - inkEl.offsetWidth / 2) + 'px';
    inkEl.style.top = (e.offsetY - inkEl.offsetHeight / 2) + 'px';
    inkEl.classList.add('animate');
  }, false);
}
