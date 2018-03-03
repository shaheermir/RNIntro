import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import EmployeeForm from './EmployeeForm'
import { Card, CardSection, Button } from './common'

import { employeeUpdate, employeeSaveChanges } from '../actions'

class EmployeeEdit extends React.Component {
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

  render () {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSaveChanges })(EmployeeEdit)
