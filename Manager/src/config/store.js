import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [ReduxThunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
