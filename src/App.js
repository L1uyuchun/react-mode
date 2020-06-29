import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/index'
import PrivateRoute from './components/privateRoute/index'
// import logo from './logo.svg';
// import './App.css';
import LayoutIndex from './pages/layoutIndex/index'

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path={'/login'} component={Login}></Route>
          <PrivateRoute path={'/'}>
              <LayoutIndex></LayoutIndex>
          </PrivateRoute>
            <Route path="*" render={
                () => {
                    return (
                        <div>
                            404
                        </div>
                    )
                }
            }/>
        </Switch>
    )
  }
}

export default App
