import React from 'react'
import { Text, StyleSheet } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress () {
    const { email, password } = this.state

    this.setState({ error: '', loading: true })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFail())
      })
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail () {
    this.setState({ error: 'Authentication Failed.', loading: false })
  }

  renderButton () {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return <Button onPress={() => this.onButtonPress()}>Log In</Button>
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection style={{ flexDirection: 'column' }}>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

export default LoginForm
