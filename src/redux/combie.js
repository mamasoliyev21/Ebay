import mainReduser from './reducer/email';
import cardReduser from './reducer/card'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth:mainReduser,
    card: cardReduser
})
 export default rootReducer