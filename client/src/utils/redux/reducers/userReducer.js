const intialState = {
    username: '',
    password: '',
    verifyPassword: ''
}

const userReducer = (userState = intialState, action) => {
    switch(action.type) {
        case 'CHANGE_USERNAME':
            return {
                ...userState,
                username: action.payload
            }
        case 'CHANGE_PASSWORD':
            return {
                ...userState,
                password: action.payload
            }
        case 'CHANGE_VERIFYPASSWORD':
            return {
                ...userState,
                verifyPassword: action.payload
            }
        default:
            return userState;
    }
}


export default userReducer;