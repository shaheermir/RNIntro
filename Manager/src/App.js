import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase'

import rootReducer from './reducers'

const store = createStore(rootReducer)

class App extends React.Component {
  componentWillMount () {
    var config = {
      apiKey: 'AIzaSyAP6OqifcqCRP6-GJQXJkYKf2772RdIQno',
      authDomain: 'manager-df288.firebaseapp.com',
      databaseURL: 'https://manager-df288.firebaseio.com',
      projectId: 'manager-df288',
      storageBucket: 'manager-df288.appspot.com',
      messagingSenderId: '778190176743'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <Provider store={store}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    )
  }
}

export default App
