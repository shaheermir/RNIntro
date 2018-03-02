import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import ListItem from './ListItem'

import { employeesFetch } from '../actions'

class EmployeeList extends React.Component {
  componentWillMount () {
    this.props.employeesFetch()
  }

  renderRow ({ item }) {
    return <ListItem employee={item} />
  }

  render () {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderRow}
        keyExtractor={employee => employee.uid}
      />
    )
  }
}

EmployeeList.propTypes = {
  employeesFetch: PropTypes.func.isRequired,
  employees: PropTypes.array
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
