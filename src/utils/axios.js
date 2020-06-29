import React from 'react'
import axios from 'axios'
import store from '../store/index'
import { getToken } from './auth'
import { message } from 'antd'
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

// create an axios instance
const service = axios.create({
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (config.isAuth) {
            // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
            config.headers['X-Token'] = getToken()
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    response => {
      const res = response.data
      if (res.code !== 20000) {
          // message.success(res.message, 3 * 1000)
        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          // 请自行在引入 MessageBox
            confirm({
                title: '你已被登出，可以取消继续留在该页面，或者重新登录',
                icon: <ExclamationCircleOutlined />,
                content: 'Some descriptions',
                cancelText:'取消',
                okText: '确定登出',
                onOk() {
                    store.dispatch('FedLogOut').then(() => {
                        window.location.reload() // 为了重新实例化vue-router对象 避免bug
                    })
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        return Promise.reject('error')
      } else {
        return response.data
      }
    },
    error => {
        console.log('err' + error) // for debug
        message.success(error.message, 3 * 1000)
        return Promise.reject(error)
    }
)

export default service
