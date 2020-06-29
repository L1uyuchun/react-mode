import { call, put, takeEvery } from 'redux-saga/effects'
import { loginIn, getUserInfo } from '../../api/login'
import { LOGIN_LOGININ, LOGIN_LOGIN_CHECK, GET_USER_INFO, PUT_USER_INFO } from './constant'
import { setToken } from '../../utils/auth'

function* loginFun(loginData) {
    try {
        const {code, token} = yield call(loginIn, loginData)
        setToken(token)
        const userinfo = yield  call(getUserInfo)
        console.log(userinfo);
        yield put({ type: LOGIN_LOGIN_CHECK, data: {
                isLogin: true,
                userinfo
            } })
    } catch (error) {
        console.log(error)
    }
}
function* userInfoFun () {
    try {
        const data = yield  call(getUserInfo)
        console.log(data);
        yield put({ type: PUT_USER_INFO, data: {
                userinfo: data.userinfo
            } })
    } catch (error) {
        console.log(error)
    }
}

export function* watchLoginIn() {
    yield takeEvery(LOGIN_LOGININ, loginFun)
}
export function* watchGetUserInfo() {
    yield takeEvery(GET_USER_INFO, userInfoFun)
}