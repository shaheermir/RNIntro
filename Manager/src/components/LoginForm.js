import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Card, CardSection, Input, Button, Spinner } from './common'
import * as actions from '../actions'

class LoginForm extends React.Component {
  onEmailChange (email) {
    this.props.onEmailChange(email)
  }

  onPasswordChange (password) {
    this.props.onPasswordChange(password)
  }

  onLoginPress () {
    console.log('test')
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError () {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner size='large' />
    }

    return <Button onPress={() => this.onLoginPress()}>Log In</Button>
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={text => this.onEmailChange(text)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={text => this.onPasswordChange(text)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  loginUser: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEmailChange: email => dispatch(actions.createEmailUpdateAction(email)),
    onPasswordChange: password =>
      dispatch(actions.createPasswordUpdateAction(password)),
    loginUser: auth => dispatch(actions.loginUser(auth))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
