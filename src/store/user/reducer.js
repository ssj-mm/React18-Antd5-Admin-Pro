import handler from "./index.js";
const { states, actions } = handler;

let reducer = (state = { ...states }, action={}) => {
    // dispath 派发竟来的数据
    // console.log('action', action)
    let newState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case 'SETNAME':
            // newState.name = action.payload
            actions.setName(newState, action)
            break
        case '':
            break
        default:
            newState = { ...states };
        break
    }
    return newState
}

export default reducer