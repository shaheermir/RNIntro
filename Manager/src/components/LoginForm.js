import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Card, CardSection, Input, Button } from './common'
import * as actions from '../actions'

class LoginForm extends React.Component {
  onEmailChange (email) {
    this.props.onEmailChange(email)
  }

  onPasswordChange (password) {
    this.props.onPasswordChange(password)
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

        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    )
  }
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEmailChange: email => dispatch(actions.createEmailUpdateAction(email)),
    onPasswordChange: password =>
      dispatch(actions.createPasswordUpdateAction(password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
