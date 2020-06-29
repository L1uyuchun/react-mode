import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-redux'
import { getToken } from '../../utils/auth'
import { connect } from 'react-redux'
import { userAction } from '../../store/login/actionCreators'

const PrivateRoute = ({children, getUserInfo, ...rest}) => {
    if(!!getToken()) {
        getUserInfo()
    }
    return (
        <Route {...rest} render={(props) => {
            return (
                    !!getToken() ?  (children):
                        <Redirect to={ {pathname: '/login',state: {from: props.location}} }/>
                )

        }
        } />
    )
}
const mapDispatchToProps = (dispatch) => {
       return {
           getUserInfo()  {
               dispatch(userAction())
           }
       }
}

export default connect(null, mapDispatchToProps)(PrivateRoute)