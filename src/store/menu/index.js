const handler = {
    states: {
        sideMenu: []
    },
    actions: {  // 同步方法
        setMenu(newState, action) {
            newState.sideMenu = action.payload
        }
    },
    actionKeys: {},
    asyncActions: { // 异步方法
        getMenu(dispath){
            // dispath  ====> 形参而已
            // setTimeout(() => {
            //     // 类似于 vuex 里面   获取完数据   commit('setMenu', 数据)
            //     dispath({type: 'setMenu', payload: ['1', '2', '3'] })
            // },3000)
        }
    }
}

let actionKeys = {}; // 获取 handler里面的 actions
for(let key in handler.actions){
    actionKeys[key] = key
}
// 赋值给 handler 里面的  actions
handler.actionKeys = actionKeys;

export default handler