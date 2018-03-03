import ReduxThunk from 'redux-thunk'
import ReduxLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import rootReducer from '../reducers'

const middleware = [ReduxThunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(ReduxLogger)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
