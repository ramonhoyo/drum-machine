import { POWER_CHANGE, VOLUME_CHANGE, LAST_KEY_PRESSED } from "./actions";

const defaultState = {
    isOn: true,
    volume: 0.3,
    lastKeyPressed: '',
}

export function  rootReducer (state = defaultState, action){
    switch(action.type){
        case POWER_CHANGE : {
            return Object.assign({}, state, {isOn: action.value})
        } 
        case VOLUME_CHANGE : {
            return Object.assign({}, state, {volume: action.value})
        }
        case LAST_KEY_PRESSED : {
            return Object.assign({}, state, {lastKeyPressed: action.last})
        }
        default : {
            return state
        }
    }
}
