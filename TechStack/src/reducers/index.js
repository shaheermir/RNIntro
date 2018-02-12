import { combineReducers } from 'redux'
import libraryReducer from './library_reducer'
import selectionReducer from './selection_reducer'

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryID: selectionReducer
})
