const intialState = {
    username: '',
    password: ''
}

const userReducer = (userState = intialState, action) => {
    switch(action.type) {
        case 'CHANGE_USERNAME':
            return {
                ...userState,
                username: action.input
            }
        case 'CHANGE_PASSWORD':
            return {
                ...userState,
                password: action.input
            }
        default:
            return userState;
    }
}


export default userReducer;