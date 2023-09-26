const store = {
    states: {
        collapsed: false,
        envType: 'pc'
    },
    actions: {
        setOpen(newState, action = {}) {
            newState.collapsed = action.payload
        },
        setEnv(newState, action = {}) {
            newState.envType = action.payload
        },
    },
    actionName: {} 
}

let actionKeys = {}; // 获取 store里面的 actions
for(let key in store.actions){
    actionKeys[key] = key
}
// 赋值给 store 里面的  actions
store.actionName = actionKeys;

export default store