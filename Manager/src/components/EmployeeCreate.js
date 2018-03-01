import React from 'react'
import { Picker, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'

import { Card, CardSection, Input, Button } from './common'

class EmployeeCreate extends React.Component {
  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='name'
            placeholder='Jane'
            value={this.props.name}
            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            value={this.props.phone}
            onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

const mapDispatchToProps = dispatch => ({
  employeeUpdate: ({ prop, value }) => dispatch(employeeUpdate({ prop, value }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate)
