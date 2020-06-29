import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import Home from '../../pages/home/index'
import Nav1 from '../../pages/Nav1/index'
import Nav2 from '../../pages/Nav2/index'
import Nav3 from '../../pages/Nav3/index'

const ContentMain = (props) => {
    console.log(props);
    return (
            <Switch>
                {
                    props.permissionRoutes.map(item => {
                        if(item.children) {
                            const routes = item.children.map(child => {
                                return (<Route exact path={child.path} component={child.component} key={child.meta.title}></Route>)
                            })
                            return routes
                        } else {
                            return (
                                <Route exact path={item.path} component={item.component} key={item.meta.title}></Route>
                            )
                        }
                    })
                }

                {/*<Route exact path={'/nav3'} component={Nav3}></Route>*/}
            </Switch>
        )
}

export default ContentMain
