import request from '../utils/axios'
 export const loginIn = (params) => {
     return request({
         url: '/api/mock/login.json',
         method: 'GET',
         params,
         isAuth: false
     })
 }
export const getUserInfo = (params) => {
    return request({
        url: '/api/mock/user.json',
        method: 'GET',
        params,
    })
}