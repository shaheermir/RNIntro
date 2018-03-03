import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import EmployeeForm from './EmployeeForm'
import { Card, CardSection, Button } from './common'
import { employeeUpdate, employeeCreate, clearEmployeeForm } from '../actions'

class EmployeeCreate extends React.Component {
  componentWillMount () {
    this.props.clearEmployeeForm()
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render () {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func,
  employeeCreate: PropTypes.func,
  clearEmployeeForm: PropTypes.func
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = dispatch => ({
  employeeUpdate: ({ prop, value }) => dispatch(employeeUpdate({ prop, value })),
  employeeCreate: ({ name, phone, shift }) => dispatch(employeeCreate({ name, phone, shift })),
  clearEmployeeForm: () => dispatch(clearEmployeeForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
