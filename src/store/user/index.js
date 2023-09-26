const handler = {
    states: {
        userInfo: {},
        token: '',
        name: 'Admin',
    },
    actions: {
        setName(newState, action) {
            newState.name = action.payload
        }
    }
}

export default handler