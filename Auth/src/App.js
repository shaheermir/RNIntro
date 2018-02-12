import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends React.Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyBIuxkh-rI5Al5m-obGJdcWUYlXNZAYprE',
      authDomain: 'auth-8ff94.firebaseapp.com',
      databaseURL: 'https://auth-8ff94.firebaseio.com',
      projectId: 'auth-8ff94',
      storageBucket: 'auth-8ff94.appspot.com',
      messagingSenderId: '78857734244'
    }
    firebase.initializeApp(config)
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App
