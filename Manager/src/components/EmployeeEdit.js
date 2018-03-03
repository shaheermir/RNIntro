import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

import EmployeeForm from './EmployeeForm'
import { Card, CardSection, Button, Confirm } from './common'

import { employeeUpdate, employeeSaveChanges, employeeDelete } from '../actions'

class EmployeeEdit extends React.Component {
  state = {
    visible: false
  }

  componentWillMount () {
    _.each(this.props.employee, (value, prop) => {
      console.log(this.props.employee)
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    this.props.employeeSaveChanges({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress = () => {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  showModal = () => {
    this.setState({ visible: !this.state.visible })
  }

  onDecline = () => {
    this.setState({ visible: false })
  }

  onAccept = () => {
    this.props.employeeDelete({ uid: this.props.employee.uid })
  }

  render () {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.showModal}>Fire</Button>
        </CardSection>

        <Confirm
          visible={this.state.visible}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to fire this employee ?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSaveChanges,
  employeeDelete
})(EmployeeEdit)
