import handler from "./index.js";
const { states, actions } = handler;

const reducer = (state = { ...states }, action={}) => {
    let newState = JSON.parse(JSON.stringify(state));

    for(let key in handler.actionName){
        if(action.type === handler.actionName[key]){
            actions[handler.actionName[key]](newState, action);
            break
        }
    }
    return {...newState}
}

export default reducer