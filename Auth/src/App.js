import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends React.Component {
  state = {
    loggedIn: null
  }

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

    /* will be called on login success AND failure
     * 'user' will be null | undefined upon failure
     */
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>LogOut</Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={styles.spinnerContainer}>
            <Spinner size='large' />
          </View>
        )
    }
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  spinnerContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App
