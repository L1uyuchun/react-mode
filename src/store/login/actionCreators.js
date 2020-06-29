import { LOGIN_LOGININ, GET_USER_INFO } from './constant'
export const loginAction = (accountInfo) => {
    return {
        type:LOGIN_LOGININ,
        accountInfo
    }
}
export const userAction = () => {
    return {
        type:GET_USER_INFO
    }
}