import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider  } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import store from './store/index'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
    <BrowserRouter>
        <ConfigProvider locale={zhCN}>
            <Provider store = {store}>
              <App />
            </Provider>
        </ConfigProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
