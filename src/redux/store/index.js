import { createStore} from 'redux'
import rootReducer from '../combie';

const store = createStore(rootReducer);


export {store}