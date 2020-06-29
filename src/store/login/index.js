import {LOGIN_LOGIN_CHECK, PUT_USER_INFO} from './constant'
const initState = {
    isLogin: localStorage.getItem('isLogin') || false,
    userInfo: {},
}
const login = (state = initState, action) => {
    if(action.type === LOGIN_LOGIN_CHECK) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.isLogin = action.data.isLogin;
        newState.userInfo = action.data.userInfo;
        return newState;
    } else if(action.type === PUT_USER_INFO) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.userInfo = action.data.userinfo;
        return newState;
    }

    return state
}
export default login