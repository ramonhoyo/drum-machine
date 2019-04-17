import { VOLUME_CHANGE, POWER_CHANGE, LAST_KEY_PRESSED } from "../data/actions";
import { PLAY } from "../values/values";


function playActionCreator(id){
    return {
        type: PLAY,
        audioTag: id
    }
}

function volumeChangeCreator(newValue){
    return {
        type: VOLUME_CHANGE,
        value: newValue
    }
}

function powerChange(newState){
    return {
        type: POWER_CHANGE,
        value: newState
    }
}

function lastKeyPressed(last){
    return {
        type: LAST_KEY_PRESSED,
        last
    }
}

export { playActionCreator, volumeChangeCreator, powerChange, lastKeyPressed}