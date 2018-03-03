import React from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'

import Router from './config/router'
import store from './config/store'

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
        <Router />
      </Provider>
    )
  }
}

export default App
