import handler from "./index.js";

const { states, actions } = handler;

let reducer = (state = { ...states }, action={}) => {
    let newState = JSON.parse(JSON.stringify(state));

    for(let key in handler.actionKeys){
        if(action.type === handler.actionKeys[key]){
            actions[handler.actionKeys[key]](newState, action);
            break
        }
    }
    return newState
}

export default reducer