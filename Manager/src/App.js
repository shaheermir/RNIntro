import React from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
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
        <LoginForm />
      </Provider>
    )
  }
}

export default App
