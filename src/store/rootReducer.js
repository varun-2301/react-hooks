import { combineReducers } from 'redux'

import { authenticatedUser } from '../containers/Login/store'
import { user } from '../containers/User/store'
import { globalState } from './reducers'

const rootReducer = combineReducers({
    globalState,
    authenticatedUser,
    user,
})

export default rootReducer
