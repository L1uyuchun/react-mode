import { all } from 'redux-saga/effects'
import { watchLoginIn, watchGetUserInfo } from './login/loginSaga'

export default function* rootSaga() {
   yield all([
       watchLoginIn(),
       watchGetUserInfo()
   ])
}