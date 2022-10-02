const userStore = {
    userDetails : {},
    prankerId : "",
    token:""
}
const LoginReducer = (state = userStore, action) => {
    switch (action.type) {
        case 'SET_USER_DETAILS':
            // sessionStorage.setItem("key",action.payload.token)
            return {
                ...state,
                userDetails: action.payload,
                prankerId : action.payload._id,
                token:action.payload.token
            };
            
    }
    return {...state}
};

export default LoginReducer;