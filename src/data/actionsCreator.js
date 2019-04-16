import { PLAY } from "../values/values";
export function playAction(src){
    return {
        type: PLAY,
        source: src
    }
}