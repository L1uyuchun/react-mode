import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSagas'
import login from './login/index'
const sagaMiddleware=createSagaMiddleware();

const rootReducer = combineReducers({
    user: login
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store